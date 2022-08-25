from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from heroes.api import viewsets as heroesviewsets

route = routers.DefaultRouter()
route.register(r'heroes', heroesviewsets.HeroesViewSet, basename='Heroes')


urlpatterns = [
    path('admin', admin.site.urls),
    path('', include(route.urls))
]
