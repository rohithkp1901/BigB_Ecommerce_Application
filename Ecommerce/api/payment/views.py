from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
import braintree
import json

gateway = braintree. BraintreeGateway(
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id="Enter yours",
        public_key="Enter yours",
        private_key="Enter yours"
    )
)

@csrf_exempt
def validate_user_session(id, token):
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False
    
@csrf_exempt
def generate_token(request, id, token):
    if not validate_user_session (id, token):
        return JsonResponse({'error': 'Invalid session, Please login again'})
    return JsonResponse({'clientToken': gateway.client_token.generate()})   

@csrf_exempt

def process_payment(request, id, token):
    try:
        data = json.loads(request.body.decode('utf-8'))

        if "paymentMethodNonce" not in data:
            raise KeyError("paymentMethodNonce not found in data")

        nonce_from_the_client = data["paymentMethodNonce"]
        amount_from_the_client = data["amount"]

        result = gateway.transaction.sale({
            "amount": amount_from_the_client,
            "payment_method_nonce": nonce_from_the_client,
            "options": {
                "submit_for_settlement": True
            }
        })

        if result.is_success:
            return JsonResponse({
                "success": result.is_success,
                'transaction': {'id': result.transaction.id, 'amount': result.transaction.amount}
            })
        else:
            return JsonResponse({'error': True, 'success': False})

    except KeyError as e:
        return JsonResponse({'error': True, 'message': str(e)}, status=400)

    except Exception as e:
        return JsonResponse({'error': True, 'message': 'An error occurred on the server'}, status=500)


class PaymentAPIView(APIView):
    def get(self, request):
        data = {
            'message': 'Payment API endpoint is working!',
            'status': 'success',
        }

        return Response(data, status=status.HTTP_200_OK)