from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('detalhes/<int:id>', views.detalhes, name='detalhes'),
]
