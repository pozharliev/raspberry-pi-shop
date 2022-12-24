from rest_framework.serializers import ModelSerializer
from .models import Store


class StoreSerializer(ModelSerializer):
    """
    Serializer for the stores model
    """
    class Meta:
        model = Store
        fields = ["id", "store_name", "domain_name"]
