from django.urls import path
from django.urls import include

import components.urls as components
import cart.urls as cart
import orders.urls as orders

urls = [
    path('', include(components.urlpatterns)),
    path('', include(cart.urlpatterns)),
    path('', include(orders.urlpatterns))
]

urlpatterns = [
    path('api/', include(urls)),
]
