from rest_framework import serializers
from .models import product

class  ProductSerializer(serializers.HyperlinkedModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model=product
        fields=('id','pname','pdescription','price','category','category_name', 'image','stock','is_active')