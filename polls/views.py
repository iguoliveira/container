from django.shortcuts import get_object_or_404, render
from polls.models import Person


def home(request):
    return render(request, 'homepage.html')

def list(request, id):    
    det_dados = get_object_or_404(
        Person, id=id
    )

    return render(request, 'list.html', {'details':det_dados})