from django.shortcuts import redirect, render
from polls.models import Person


def home(request):
    return render(request, 'homepage.html')


def list(request):
    person_data = Person.objects.all()
    context = {
        'person': person_data,
    }

    return render(request, 'list.html', context)

def salvar_poli(request):
    if str(request.method)!='POST':
        return render(request, 'homepage.html')
    else:    
        name = request.POST.get('name')
        age = request.POST.get('age')
        sex = request.POST.get('sex')

        pessoa = Person.objects.create(
            name = name,
            age = age,
            sex = sex
        )

        pessoa.save()

        return redirect('list')