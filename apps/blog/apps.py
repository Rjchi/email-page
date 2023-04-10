from django.apps import AppConfig


class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.blog' # Esto siempre lo debemos hacer con cada aplicacion que creemos
