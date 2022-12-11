from django.db import models
from django.contrib.postgres.fields import ArrayField


class Store(models.Model):
    store_name = models.CharField(max_length=128)
    domain_name = models.CharField(max_length=128)
    allowed_domains = ArrayField(base_field=models.CharField(max_length=128))
    start_urls = ArrayField(base_field=models.CharField(max_length=128))

    class Meta:
        db_table = 'stores'