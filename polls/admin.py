from django.contrib import admin
from polls.models import Person

# Register your models here.
class adminCrud(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'sex')

admin.site.register(Person, adminCrud)