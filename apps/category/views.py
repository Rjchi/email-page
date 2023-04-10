# APIView es la mejor manera de hacer vistas en django rest framework
from rest_framework.views import APIView

# Esto es para hacer la respuesta de una vista
# Los parametros de Response es lo que esperamos que devuelva en postman
from rest_framework.response import Response

# Es para poder dar mayor detalle a la respuesta de una vista
from  rest_framework import status

# Es para delegar quien puede acceder a nuestro contenido (ver, editar, borrar etc)
from rest_framework import permissions

# Traemos los modelos de esta aplicacion (category)
from . import models

# Con esto enlistamos las categorias
class ListCategoriesView(APIView):
    # Que permisos tienen las personas
    # (Como solo estamos listando damos acceso sin restricciones) ver https://www.django-rest-framework.org/api-guide/permissions/
    permission_classes = (permissions.AllowAny,) # esto es una tupla por eso la coma al final

    def get(self, request, format=None): # (los que hacen uso, lo que enviamos a la vista, )
        # Primero nos preguntamos si tenemos por lo menos una categoria
        # y lo probamos con postman
        # if models.Category.objects.all().exists():
        #     print('Categories List')
        #     return Response({'categories': 'test message'}, status=status.HTTP_200_OK)
        # else:
        #     return Response({'error': 'No hemos encontrado categorias'}, status=status.HTTP_404_NOT_FOUND)


        # Primero nos preguntamos si tenemos por lo menos una categoria
        if models.Category.objects.all().exists():
            # Esto es crear un serializador desde cero:
            categories = models.Category.objects.all() # QuerySet

            result = []
            for category in categories:
                if not category.parent:
                    item = {}
                    item['id'] = category.id
                    item['name'] = category.name
                    item['slug'] = category.slug
                    item['views'] = category.views

                    item['sub_categories'] = []
                    for sub_category in categories:
                        sub_item = {}
                        if sub_category.parent and sub_category.parent.id == category.id:
                            sub_item['id'] = sub_category.id
                            sub_item['name'] = sub_category.name
                            sub_item['slug'] = sub_category.slug
                            sub_item['views'] = sub_category.views

                            item['sub_categories'].append(sub_item)
                    result.append(item)

            return Response({'categories': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)