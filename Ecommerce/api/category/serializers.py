from rest_framework import serializers
from .models import category

class  CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=category
        fields=('id','name','description','image',)