from django.shortcuts import get_object_or_404, render
from home.models import Curso

# Create your views here.


def index(request):
    curso_dados = Curso.objects.all()
    context = {
        'curso': curso_dados,
    }
    return render(request, 'home/index.html', context)


def detalhes(request, id):
    det_dados = get_object_or_404(
        Curso, id=id
    )
    return render(request, 'home/detalhes.html', {'detalhe': det_dados})
