from django.contrib import admin
from .models import *


@admin.register(UserAccount)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name',
                    'email', 'is_staff', 'is_editor')

    # Esto nos permite buscar por estos campos (tupla)
    search_fields = ('id', 'first_name', 'last_name',
                     'email', 'is_staff', 'is_editor',)

    list_display_links = ('email', )

    list_per_page = 25
