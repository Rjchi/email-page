"""
Urls de mi site

"""
from django.contrib import admin
# Importamos re_path y include
from django.urls import path, re_path, include
# Y ahora para renderizar el build/index.html
from django.views.generic import TemplateView
# Esto es para devolver un patrón de URL para servir archivos en modo de depuración
from django.conf.urls.static import static
# Importamos el archivo settings.py
from django.conf import settings

urlpatterns = [
    # Esto es parte de la configuracion de djoser
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    
    # Viculamos las urls de blog y category
    path('api/blog/', include('apps.blog.urls')), # esto se vera asi http://dominio.com/api/blog
    path('api/category/', include('apps.category.urls')),
    path('api/contacts/', include('apps.contact.urls')),
    # path("", include('apps.user.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')), # esto es para poder subir una imagen en ckeditor
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # Llamamos a MEDIA_URL e indicamos cual es el root(donde guardamos las img, vid..)

# Con este estariamos utilizando el server de django para visualizar la plantilla index.html de react
# Indicamos el template que vamos a utilizar
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='Index.html'))] # Esto '^.*' es un caracter de regex ver https://regex101.com/