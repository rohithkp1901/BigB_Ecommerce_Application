from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import order
from .serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=False, methods=['POST'])
    def place_order(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response({'message': 'Order placed successfully'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': f'Error placing order: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
