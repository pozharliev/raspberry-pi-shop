from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from django.http import HttpRequest

from .models import Orders, OrderItems, OrderInfo
from cart.services.Cart import Cart
from components.models import Components


class OrderViewSet(GenericViewSet):
    """
    Viewset for orders.
    """
    def create(self, request: HttpRequest):
        """
        Create an order
        Args:
            request: The request

        Returns:
            200 OK or 40X Error
        """
        cart = Cart.from_session(request)

        items = cart.get('items', {}).values()
        totals = cart.get('totals', 0)

        if len(items) == 0:
            return Response({"status": "failed", "message": "No items to checkout"}, 406)

        order = Orders(total=totals['total'])
        order.save()

        for item in items:
            order_item = OrderItems(order=order, component=Components.objects.get(id=item['id']), quantity=item['quantity'])
            order_item.save()

        Cart.empty_cart(request)

        return Response({"order_id": order.id}, 200)
