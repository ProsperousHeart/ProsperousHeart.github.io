from django.shortcuts import render

# Create your views here.
def header(request):
    """
    Function that provides the header ...
    """

    context = {
        'text': "This is the header of the site!"
    }
    return render(request, 'header.html', context)
