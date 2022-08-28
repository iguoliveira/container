from django.db import models
from uuid import uuid4
from stdimage import StdImageField

# Create your models here.

class Rank(models.Model):
    id_rank = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    rank = models.CharField(max_length=1)

    def __str__(self):
        return self.rank

class Heroes(models.Model):
    id_heroe = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    heroe_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    status = models.BooleanField()
    position = models.IntegerField()
    fk_rank = models.ForeignKey(Rank, on_delete=models.PROTECT)
    race = models.CharField(max_length=255)
    gender = models.CharField(max_length=1)
    photo = StdImageField(upload_to='%y/%m/%d')