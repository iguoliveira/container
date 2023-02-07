from django.contrib import admin
from home.models import Curso

# Register your models here.

class CursoAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'preco', 'ativo')
    list_editable = ('ativo',)
    list_display_link = ('nome',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Curso, CursoAdmin)