from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from polls.models import Person


def home(request):
    return render(request, 'homepage.html')

def list(request):
    # # personInfo = get_object_or_404(
    # #     Person, id=id
    # # )
    # return render(request, 'list.html', {
    #     'details':personInfo
    # })
    
    sql = Person.objects.all()

    context = {
        'person_info':sql,
    }

    return render(request, 'list.html', context)