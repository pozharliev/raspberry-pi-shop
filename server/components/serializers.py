from rest_framework.serializers import ModelSerializer
from .models import Categories, Component


class CategoriesSerializer(ModelSerializer):
    """
    Serializer for the Categories model
    """
    class Meta:
        model = Categories
        fields = "__all__"


class ComponentsSerializer(ModelSerializer):
    """
    Serializer for the Components model
    """
    class Meta:
        model = Component
        fields = "__all__"
