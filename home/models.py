from distutils.command.upload import upload
from django.db import models
from stdimage import StdImageField

# Create your models here.


class Curso(models.Model):
    nome = models.CharField(max_length=50)
    descricao = models.CharField(max_length=200)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    ativo = models.BooleanField()
    foto = StdImageField(upload_to='foto/%y/%m/%d/', variations={'pequena': (300, 300), 'media': (600, 600), 'grande': (800, 800),})

    def __str__(self):
        return self.nome
