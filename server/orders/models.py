from django.db import models
from datetime import date

from components.models import Components


class Orders(models.Model):
    date = models.DateField(default=date.today())
    total = models.FloatField()


class OrderItems(models.Model):
    order = models.ForeignKey(to=Orders, on_delete=models.CASCADE)
    component = models.ForeignKey(to=Components, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class OrderInfo(models.Model):
    order = models.ForeignKey(to=Orders, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1028)
    email = models.EmailField()
    country = models.CharField(max_length=128)
    city = models.CharField(max_length=128)
    address = models.CharField(max_length=1028)
    phone = models.CharField(max_length=128)




