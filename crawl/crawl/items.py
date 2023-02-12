from scrapy_djangoitem import DjangoItem
from components.models import Components


class ComponentItem(DjangoItem):
    django_model = Components
