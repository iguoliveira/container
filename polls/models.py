from django.db import models
from stdimage.models import StdImageField

class Person(models.Model):
    name = models.CharField(max_length=300)
    age = models.SmallIntegerField()
    sex = models.CharField(max_length=1)
    image = StdImageField(upload_to='media/', variations={'small': (100, 100), 'medium': (300,300)})

# When class is called, return name, otherwise, object will be returned
    def __str__(self):
        return self.name
