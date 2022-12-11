from scrapy_djangoitem import DjangoItem
import sys
sys.path.append("..")
from components.models import Component


class ComponentItem(DjangoItem):
    django_model = Component
