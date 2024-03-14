from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
def helloworld(request):
    return JsonResponse({

        'name': 'John',
        'description':'This is a simple Hello World example'
    })
