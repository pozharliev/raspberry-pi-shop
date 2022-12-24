from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action

from .models import Categories, Component, Featured
from .serializers import CategoriesSerializer, ComponentsSerializer, FeaturedSerializer


class CategoriesViewSet(ViewSet):
    """
    Viewset for the categories model.
    """
    permission_classes = []

    def list(self, request: HttpRequest):
        """
        Returns all categories and their id's.
        """
        categories = Categories.objects.all()
        serialized_categories = CategoriesSerializer(categories, many=True)

        return Response(serialized_categories.data)

    def retrieve(self, request: HttpRequest, pk=None):
        """
        Returns category based on the id.
        """
        category = Categories.objects.get(id=pk)
        serialized_category = CategoriesSerializer(category, many=False)

        return Response(serialized_category.data)


class ComponentsViewSet(ViewSet):
    """
    Viewset for the components model
    """

    def list(self, request: HttpRequest):
        """
        Returns all components
        """
        components = Component.objects.all()
        serialized_components = ComponentsSerializer(components, many=True)

        return Response(serialized_components.data)

    def retrieve(self, request: HttpRequest, pk=None):
        """
        Returns component based on the id
        """
        component = Component.objects.get(id=pk)
        serialized_component = ComponentsSerializer(component, many=False)

        return Response(serialized_component.data)

    def create(self, request: HttpRequest):
        """
            Returns all components
        """
        category_id = request.data.get('categoryId')

        components = Component.objects.all()

        if category_id is not None:
            components = components.filter(category=category_id)

        serialized_components = ComponentsSerializer(components, many=True)
        return Response(serialized_components.data)

    @action(methods=['GET'], detail=False, url_path='featured', url_name='featured')
    def featured(self, request: HttpRequest):
        featured = Featured.objects.all()

        serialized_featured = FeaturedSerializer(featured, many=True)

        return Response(serialized_featured.data)
