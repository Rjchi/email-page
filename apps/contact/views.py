from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import requests

from .models import Contact
from django.core.mail import send_mail

# Tomamos del archivo .env esto:
from django.conf import settings

active_campaign_url = settings.ACTIVE_CAMPAIGN_URL
active_campaign_key = settings.ACTIVE_CAMPAIGN_KEY

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        subject = data['subject']
        message = data['message']
        phone = data['phone']
        budget = data['budget']

        try:
            send_mail(
                subject,
                'New possible client: '
                + 'Name: ' + name
                + '\nEmail: ' + email
                + '\n\nMessage: \n' + message
                + '\nPhone: ' + phone
                + '\n\nBudget: ' + budget,
                'richi@gmail.com',
                ['richi@gmail.com'],
                fail_silently=False
            )

            Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message,
                budget=budget
            )

            return Response({
                'success': 'Message sent successfully'
            })
        except:
            return Response({
                'error': 'Message not sent'
            })


class OptInView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):

        data = self.request.data
        email = data['email']
        tag = data['tag']
        list = data['list']

        try:
            # Create/Update contact:
            url = active_campaign_url + "/api/3/contact/sync"
            data = {
                'contact': {
                    'email': email,
                }
            }

            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Api-Token': active_campaign_key,
            }

            response = requests.post(url, json=data, headers=headers)

            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {'error': 'Something went wrong when creating contact'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
            contact = response.json()

            try:
                contact_id = str(contact['contact']['id'])
            except:
                return Response(
                    {'error': 'Something went wrong when getting contact ID'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            # Adding of the tag to contact
            url = active_campaign_url + "/api/3/contactTags"
            data = {
                'contactTag': {
                    'contact': contact_id,
                    'tag': tag,
                }
            }

            response = requests.post(url, json=data, headers=headers)

            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {'error': 'Something went wrong when adding tag to contact'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            # Add contact to our master list and demo list:
            url = active_campaign_url + "/api/3/contactLists"

            data = {
                'contactList': {
                    'list': list,
                    'contact': contact_id,
                    'status': '1'
                }
            }

            response = requests.post(url, json=data, headers=headers)
            if response.status_code != 201 and response.status_code != 200:
                return Response(
                    {'error': 'Something went wrong when adding contact to master list'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
            return Response(
                {'success': 'Contact added to email list'},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Error adding to email list'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
