from unicodedata import name
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=300)
    age = models.SmallIntegerField()
    sex = models.CharField(max_length=1)