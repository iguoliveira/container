from rest_framework import viewsets
from heroes.api import serializers
from heroes import models

class HeroesViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.HeroesSerializer
    queryset = models.Heroes.objects.all()