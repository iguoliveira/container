from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from heroes.api import viewsets as vws
from django.conf.urls.static import static
from django.conf import settings

route = routers.DefaultRouter()
route.register(r'heroes', vws.HeroesViewSet, basename='Heroes')
route.register(r'ranks', vws.RanksViewSet, basename='Ranks')


urlpatterns = [
    path('admin', admin.site.urls),
    path('', include(route.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
