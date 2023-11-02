from django.urls import path
from .views import *

urlpatterns = [
    path("", ContactCreateView.as_view(), name="ContactCreate"),
    path("opt-in", OptInView.as_view(), name="OptIn"),
]
