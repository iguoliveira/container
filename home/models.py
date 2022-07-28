from string import digits
from django.db import models
from django.forms import CharField

# Create your models here.


class Curso(models.Model):
    nome = models.CharField(max_length=50)
    descricao = models.CharField(max_length=200)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    ativo = models.BooleanField()

    def __str__(self):
        return self.nome
