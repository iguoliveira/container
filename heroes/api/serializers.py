from rest_framework import serializers
from heroes import models

class RanksSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Rank
        fields = '__all__'

class HeroesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Heroes
        fields = '__all__'

        