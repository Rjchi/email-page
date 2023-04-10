# Esto siempre lo debemos hacer con todas las aplicaciones
from django.urls import path
from . import views  # Importamos todo lo de views

urlpatterns = [
    path('list', views.ListCategoriesView.as_view(), name='ListCategories'),
]