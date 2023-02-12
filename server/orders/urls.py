from rest_framework import routers
from .views import OrderViewSet

router = routers.SimpleRouter()
router.register('checkout', OrderViewSet, basename='checkout')

urlpatterns = router.urls
