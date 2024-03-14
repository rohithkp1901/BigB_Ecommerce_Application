from rest_framework import viewsets
from .models import product
from .serializers import ProductSerializer
from django.views import View
from django.http import JsonResponse
# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):

    queryset = product.objects.all()
    serializer_class = ProductSerializer


   
    