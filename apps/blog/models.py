from django.db import models
from django.utils import timezone

from ckeditor.fields import RichTextField
import uuid

from apps.category.models import Category
from django.conf import settings
# Esta forma de llamar al usuario solo la vamos a utilizar cuando estemos
# trabajando con el modelo del usuario en un modelo especifico (en este caso esta como relacion
# foranea en el campo author)
User = settings.AUTH_USER_MODEL

def blog_thumbnail_directory(instance, filename):
    # funcion que indica el directorio en media/blog(automatico)
    return f'blog/{instance.title}/{filename}'


class Post(models.Model):
    # Esto es para gestionar lo que queremos hacer con el post
    class PostObjects(models.Manager):
        def get_queryset(self):
            # Con esto le damos un estatus al post
            return super().get_queryset().filter(status='published')

    options = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    title = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(max_length=255, unique=True, default=uuid.uuid4)
    # upload_to donde la subimos
    thumbnail = models.ImageField(
        upload_to=blog_thumbnail_directory, max_length=500, blank=True, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(max_length=255, blank=True, null=True)  # Description small
    content = RichTextField(blank=True, null=True)  # Texto enriquesido esto depende de la config que le dimos
    published = models.DateTimeField(default=timezone.now)
    views = models.IntegerField(default=0, blank=True)
    status = models.CharField(max_length=10, choices=options, default='draft')
    objects = models.Manager()  # Default manager
    post_objects = PostObjects()
    time_red = models.IntegerField(blank=True, null=True)

    # Si se borra la categoría el post no y <<vs>>
    category = models.ForeignKey(Category, on_delete=models.PROTECT, blank=True, null=True)

    class Meta:
        ordering = ('-published', )  # Con esto tomamos el mas nuevo

    def __str__(self):  # Como lo queremos ver
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views


class ViewCount(models.Model):

    post = models.ForeignKey(
        Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"
