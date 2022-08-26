from distutils.command.upload import upload
from django.db import models
from uuid import uuid4
from stdimage import StdImageField, JPEGField

# Create your models here.

def heroeFile(instance, filename):
    return '/'.join( ['heroes', str(instance.id_heroe), filename] )

class Heroes(models.Model):
    id_heroe = models.UUIDField(primary_key=True,default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    rank = models.CharField(max_length=1)
    position = models.IntegerField()
    race = models.CharField(max_length=255)
    gender = models.CharField(max_length=1)
    photo = models.ImageField(upload_to=heroeFile, max_length=254, blank=True, null=True)
    photo = StdImageField(upload_to='%y/%m/%d')
