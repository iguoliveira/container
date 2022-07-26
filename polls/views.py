from django.shortcuts import render
from polls.models import Person


def home(request):
    sql = Person.objects.all()

    context = {
        'person_info':sql,
    }

    return render(request, 'homepage.html', context)
