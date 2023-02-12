from rest_framework.serializers import ModelSerializer
from .models import Stores


class StoreSerializer(ModelSerializer):
    """
    Serializer for the stores model
    """
    class Meta:
        model = Stores
        fields = ["id", "store_name", "domain_name"]
