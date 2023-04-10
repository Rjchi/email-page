"""
WSGI : hace una serie de pasos correspondientes a UN request, para
posteriormente pasar al siguiente request
(Se utiliza cuando vamos a hacer una pagina)

ASGI : hace lo mismo que el primero, pero si en algun paso nota que se va a tardar en responder
salta al siguiente request mientras el paso termina de procesarce
(Se utiliza cuando vamos a utilizar el asincronismo o paginas en vivo (twich) chats en vivo con django)

Esto es relevante cuando desplegamos nuestra pagina, dependiendo de lo que queramos hacer

"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_asgi_application()
