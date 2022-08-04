from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=300)
    age = models.SmallIntegerField()
    sex = models.CharField(max_length=1)

# When class is called, return name, otherwise, object will be returned
    def __str__(self):
        return self.name