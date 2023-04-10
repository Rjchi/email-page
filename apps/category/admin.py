from django.contrib import admin
from . import models

# Registramos los modelos al panel de administracion

class CategoryAdmin(admin.ModelAdmin):
    # Con esto indicamos como queremos ver panel de administrador
    list_display =  ('id', 'name', 'parent')

    # Quiero poder acceder a esto dando click en el name
    list_display_links =  ('name', )

    # Lista por pagina
    list_per_page = 25

admin.site.register(models.Category, CategoryAdmin)