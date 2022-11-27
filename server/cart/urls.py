from rest_framework import routers
from .views import CartViewset, ItemViewset

router = routers.SimpleRouter(trailing_slash=False)
router.register('cart', CartViewset, basename='cart')
router.register('cart/item', ItemViewset, basename='cart-item')


urlpatterns = router.urls
