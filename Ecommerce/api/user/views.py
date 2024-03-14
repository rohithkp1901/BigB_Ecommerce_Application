from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import CustomerUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login,logout
import re
import random
from rest_framework.views import APIView

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


def session_token_generate(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97,123)] + [str(i) for i in range(10)]) for _ in range(length))

@csrf_exempt
def signin(request):
    if not request.method == 'POST':
        return JsonResponse({'error':'Send a request'})
    username=request.POST['email']
    password=request.POST['password']

    if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$",username):
        return JsonResponse({'error':'Invalid Email Id'})
    
    if len(password)<5:
        return JsonResponse({'error':'password length  should be greater than 5 characters'})
    
    UserModel=get_user_model()

    try:
        user = UserModel.objects.get(email=username)
        if user.check_password(password):
            usr_dict=UserModel.objects.filter(email=username).values().first()
            usr_dict.pop('password')

            if user.session_token != "0":
                user.session_token = "0"
                user.save()
                return JsonResponse({'error':'previous session exists...'})
            
            token=session_token_generate()
            user.session_token=token
            
            user.save()
            usr_dict=UserModel.objects.filter(email=username).values().first()
            usr_dict.pop('password')
            login(request,user)
            return JsonResponse({'token':token,'user':usr_dict})
            
        else:
            return JsonResponse({'error':'Invalid Password'})
    except UserModel.DoesNotExist:
        return JsonResponse({'error':'Invalid Email'})
    
def signout(request, id):
    logout(request)
    UserModel = get_user_model()

    user = UserModel.objects.get(pk=id)
    user.session_token = "0"
    user.save()

    return JsonResponse({'success': 'Logout success'})


class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create':[AllowAny]}

    queryset=CustomerUser.objects.all().order_by('id')
    serializer_class= UserSerializer
    def get_permissions(self):
        action =self.action

        if action in self.permission_classes_by_action:
            return [permission() for permission in self.permission_classes_by_action[action]]
        else:
            return[AllowAny()]
class UserDetails(APIView):
    def get(self, request, user_id, *args, **kwargs):
        try:
            user = CustomerUser.objects.get(id=user_id)
        except CustomerUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user)
        return Response(serializer.data)

    def patch(self, request, user_id, *args, **kwargs):
        try:
            user = CustomerUser.objects.get(id=user_id)
        except CustomerUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)