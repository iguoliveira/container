from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('list/', views.list, name='list')
    # path('list/<int:id>', views.list, name='list') <- URL with type and valuable
]
