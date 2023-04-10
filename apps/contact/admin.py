from django.contrib import admin
from . import models

class ContactAdmin(admin.ModelAdmin):
    list_display =  ('id', 'name', 'email')

    list_display_links =  ('email', )

    list_per_page = 25

admin.site.register(models.Contact, ContactAdmin)
