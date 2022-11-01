from django.db import models


# TODO: Make a fixture
class Categories(models.Model):
    name = models.CharField(max_length=128, unique=True)


class Component(models.Model):
    name = models.TextField()
    description = models.TextField()
    price = models.DecimalField()
    category = models.ForeignKey(Categories)
    image = models.TextField(description='Link to the image')
    url = models.TextField()

    class Meta:
        db_table = 'components'
