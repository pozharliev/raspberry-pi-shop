from rest_framework import routers
from .views import CategoriesViewSet, ComponentsViewSet

router = routers.SimpleRouter()
router.register('categories', CategoriesViewSet, basename='categories')
router.register('components', ComponentsViewSet, basename='components')

urlpatterns = router.urls
