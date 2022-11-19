from django.urls import path
from django.urls import include

import components.urls as components

urls = [
    path('', include(components.urlpatterns))
]

urlpatterns = [
    path('api/', include(urls)),
]
