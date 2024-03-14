from django.db import models
from api.category.models import category

# Create your models here.

class product(models.Model):
    pname=models.CharField(max_length=50,null=True)
    pdescription=models.CharField(max_length=200,null=True)
    price=models.DecimalField(max_digits=10, decimal_places=2,null=True)
    category = models.ForeignKey(category, on_delete=models.CASCADE)
    image = models.ImageField(null=True,blank=True,upload_to='images/')
    stock = models.IntegerField(null=True)
    is_active = models.BooleanField(default=True,blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)
    def decrease_stock(self, quantity):
        self.stock -= quantity
        if self.stock <= 0:
            self.stock = 0
            self.is_active = False
        self.save()
    def __str__(self):
        return self.pname
