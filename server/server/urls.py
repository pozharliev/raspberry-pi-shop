from django.urls import path
from django.urls import include

import components.urls as components
import cart.urls as cart

urls = [
    path('', include(components.urlpatterns)),
    path('', include(cart.urlpatterns))
]

urlpatterns = [
    path('api/', include(urls)),
]
