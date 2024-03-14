from django.db import models
from api.product.models import product
from api.user.models import CustomerUser
# Create your models here.
class order(models.Model):
    user = models.ForeignKey(CustomerUser, on_delete=models.CASCADE)
    product = models.ManyToManyField(product,related_name='orders')
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def  __str__(self):
        return f"Order {self.id} by {self.user}"