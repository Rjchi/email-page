from rest_framework import serializers

from apps.category.serializers import CategorySerializer

from . import models

class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer() # Con esto podremos ver la categoria completa
    class Meta:
        model = models.Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'published',
            'status',
            'views',
            'time_red',
            'category',
        ]

class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = models.Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'published',
            'status',
            'views',
            'time_red',
            'category',
        ]