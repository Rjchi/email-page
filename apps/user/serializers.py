# Serializador especial de djoser
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

# Traemos el modelo de usuario
from django.contrib.auth import get_user_model
# en user ya estaria el modelo
User = get_user_model()

class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        # Indicamos el modelo que estamos serializando
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'is_active',
            'is_staff',
            'is_editor',
        ]