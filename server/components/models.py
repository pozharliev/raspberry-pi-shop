from django.db import models

from stores.models import Stores


class Categories(models.Model):
    name = models.CharField(max_length=128, unique=True)
    display_name = models.CharField(max_length=128)
    description = models.CharField(max_length=512, null=True)


class Components(models.Model):
    name = models.TextField()
    store = models.ForeignKey(to=Stores, on_delete=models.CASCADE)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(to=Categories, on_delete=models.CASCADE)
    image = models.TextField()
    url = models.TextField()

    class Meta:
        db_table = 'components'


class Featured(models.Model):
    component = models.ForeignKey(to=Components, on_delete=models.CASCADE)
    order = models.IntegerField()
