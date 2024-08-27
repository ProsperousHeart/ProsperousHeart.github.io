# from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    """
    Function that shows the home page of the site.
    """
    # return HttpResponse("View is working for main site base!")

    context = {
        "first_name": "Kassandra",
        "last_name": "Keeton",
    }
    return render(request, 'home.html', context)
