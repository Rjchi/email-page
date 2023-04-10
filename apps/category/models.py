from django.db import models

# MODELO 1
class Category(models.Model):
    class Meta: # Esto es para visualizar correctamente las categorias en el admin/
        verbose_name = 'Category' # Singular
        verbose_name_plural = 'Categories' # Plural

    # Con unique hacemos que no hayan nombres duplicados
    name = models.CharField(max_length=255, unique=True) # str
    slug = models.SlugField(max_length=255, unique=True) # Esto es lo que vamos a utilizar como url

    views = models.IntegerField(default=0, blank=True) # int

    # Esto es para las subcategorias (si borramos la categoria todas las subcategorias son borradas)
    # null true porque no es obligatorio tener subcategorias
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)

    # self hace referencia al modelo Category
    # Con esto hacemos que nos muestre desde el panel de admin
    # el nombre de los projectos
    def __str__(self):
        return self.name

    # Creamos una funcion para obtener el numero de vistas que tiene una categoria
    def get_view_count(self):
        # Llamamos al modelo de abajo y filtramos la categoria
        views = ViewCount.objects.filter(category = self).count()
        return views



# MODELO 2

# Esto sirve para el analisis de datos en este caso la categoria mas visitada
class ViewCount(models.Model):
    # Indicamos a que categoria pertenese
    category = models.ForeignKey(Category, related_name='category_view_count', on_delete=models.CASCADE)
    # Tomamos la ip de la persona que visita el sitio para poder guardar su vista
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"