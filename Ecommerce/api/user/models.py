from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomerUser(AbstractUser):
    name=models.CharField(max_length=50,default='Anonymous',null=True)
    address=models.TextField()
    email=models.EmailField(max_length=234,unique=True,null=True)
    phone=models.CharField(max_length=15,blank=True,null=True)
    password=models.CharField(max_length=150,null=True)
    username=None

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

    gender=models.CharField(max_length=50,blank=True,null=True)

    session_token=models.CharField(max_length=50,default=0,null=True)
    created_at=models.DateTimeField(auto_now_add=True,null=True)
    updated_at=models.DateTimeField(auto_now=True,null=True)

    def __str__(self):
        return self.name