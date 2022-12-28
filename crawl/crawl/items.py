from scrapy_djangoitem import DjangoItem
from components.models import Component


class ComponentItem(DjangoItem):
    django_model = Component
