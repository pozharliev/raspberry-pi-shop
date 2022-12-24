from rest_framework.serializers import ModelSerializer, SerializerMethodField

from .models import Categories, Component, Featured
from stores.serializers import StoreSerializer


class CategoriesSerializer(ModelSerializer):
    """
    Serializer for the Categories model
    """
    count = SerializerMethodField()

    def get_count(self, obj):
        return Component.objects.filter(category=obj.id).count()

    class Meta:
        model = Categories
        fields = "__all__"


class ComponentsSerializer(ModelSerializer):
    """
    Serializer for the Components model
    """
    category = CategoriesSerializer(many=False, read_only=True)
    store = StoreSerializer(many=False, read_only=True)

    class Meta:
        model = Component
        fields = ["id", "name", "store", "description", "price", "image", "url", "category"]


class FeaturedSerializer(ModelSerializer):
    """
    Serializer for the Featured model
    """
    component = ComponentsSerializer(many=False, read_only=True)

    class Meta:
        model = Featured
        fields = ["order", "component"]
