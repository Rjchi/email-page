from django.db import models

# AbstractBase (Modelo basico de un usuario)
# PermissionsMixin (Permisos del usuario)
# baseUserManager (Manager de usuario que crea al usuario)
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


# Manager de usuario para crear un usuario:

class UserAccountManager(BaseUserManager):
    # Funcion para crear un usuario:

    # A esta funcion se le van a pasar un email y una contraseña
    # el extra fields es por si queremos pasar tambien nombre, apellido etc
    def create_user(self, email, password=None, **extra_fields):
        # si no hay correo no continuamos
        if not email:
            raise ValueError('Debe ingresar un correo electronico')

        # Definimos lo que va a tener el usuario
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)

        # Y por ultimo guardamos el usuario que hemos creado y lo retornamos
        user.save()
        return user

    # Funcion para crear un superUsuario

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)

        user.is_superuser = True
        user.is_staff = True

        user.save()
        return user


# Modelo de usuario (heredamos de abstra... y permiss...):

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # tipo de usuario (editor)
    is_editor = models.BooleanField(default=False)

    # Aqui utilizamos el manager de objetos que definimos en la parte de arriba
    objects = UserAccountManager()

    # Esto es para posteriormente poder hacer login con esto
    USERNAME_FIELD = 'email'
    # Con esto indicamos cuales de los campos de arriba son necesarios para registrarnos
    REQUIRED_FIELDS = ['first_name', 'last_name']

    # Ahora definimos como lo queremos ver en el admin
    def __str__(self):
        return self.email
