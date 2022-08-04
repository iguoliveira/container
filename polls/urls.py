from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('list/', views.list, name='list'),
    path('salvar_poli/', views.salvar_poli, name='salvar_poli'),
]
