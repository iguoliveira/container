from django.contrib import admin
from polls.models import Person

# Register your models here.
class adminCrud(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'sex')
    list_display_link = ('name',)
    search_fields = ('name',)
    list_per_page = 10


admin.site.register(Person, adminCrud)