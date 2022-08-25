from rest_framework import serializers
from heroes import models

class HeroesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Heroes
        fields = '__all__'