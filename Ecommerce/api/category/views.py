from rest_framework import viewsets
from .models import category
from .serializers import CategorySerializer
from django.http import JsonResponse

# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = category.objects.all()
    serializer_class = CategorySerializer



