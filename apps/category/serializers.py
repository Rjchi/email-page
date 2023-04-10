# El serializador toma el modelo que le especifiquemos en este caso Category
# toma todos sus campos name, slug, views..

# Y esta informacion la convierte en formato JSON para posteriormente ser manipulado por el front end

from rest_framework import serializers
from . import models

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        # Indicamos el modelo
        model = models.Category
        # Esto va a contener los campos del modelo (name, slug...)
        fields = [
            'id',
            'name',
            'slug',
            'views',
            # parent al ser fk en este caso no lo necesitamos
        ]