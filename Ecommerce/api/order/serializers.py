from rest_framework import serializers
from .models import order

class  OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=order
        fields=('id', 'user','product','total_price')