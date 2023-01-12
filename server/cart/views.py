from django.http import HttpRequest as Request
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from .services.Cart import Cart

from components.models import Component
from components.serializers import ComponentsSerializer


class CartViewset(ViewSet):
    """
    Viewset for the cart
    """

    def list(self, request: Request):
        return Response(Cart.from_session(request.session['cart_contents']))


class ItemViewset(ViewSet):
    """
    Viewset for the items.
    """

    def update(self, request: Request, pk=None):
        """
        Adds an item to the cart.
        Args:
            request: The request
            pk: Primary key of the item

        Returns:
            Response: 200 OK or 400 Error
        """

        quantity = request.data.get('quantity', 1)

        # Items is empty
        if not (request.session.get('cart_contents', None) and request.session.get('cart_contents', {}).get('items', None)):
            request.session['cart_contents']['items'] = {}
            request.session.modified = True

        # The item hasn't been added to the cart before
        if not request.session.get('cart_contents', {}).get('items', {}).get(pk, {}):
            # Check if the item exists
            try:
                item = Component.objects.get(id=pk)
                serialized_item = ComponentsSerializer(item, many=False)
            except Component.DoesNotExist:
                return Response({
                    "status": "Failed",
                    "reason": "Component doesn't exist"
                }, 500)

            request.session['cart_contents']['items'][pk] = {
                **serialized_item.data,
                "quantity": quantity,
            }
        else:  # The item has been added before
            request.session['cart_contents']['items'][pk]['quantity'] += int(quantity)  # Just add the desired quantity

        request.session.modified = True

        return Response(Cart.from_session(request.session['cart_contents']), 200)

    def destroy(self, request: Request, pk=None):
        """
        Removes an item from the cart
        Args:
            request: The request
            pk: Primary key of the item

        Returns:
            Response: 200 OK or 400 Error
        """
        request.session['cart_contents']['items'].pop(pk, None)
        request.session.modified = True

        return Response(Cart.from_session(request.session['cart_contents']), 200)

    def partial_update(self, request: Request, pk=None):
        quantity = request.data.get('quantity', "-1")

        if not quantity or int(quantity) < 0:
            return Response({
                "status": "Failed",
                "reason": "Invalid quantity."
            }, 500)

        try:
            quantity = int(quantity)
        except TypeError:
            return Response({
                "status": "Failed",
                "reason": "Quantity is not an integer"
            }, 500)

        if quantity == 0:
            request.session.pop(pk)
        else:
            if request.session['cart_contents']['items'].get(pk, {}):
                request.session['cart_contents']['items'][pk]['quantity'] = quantity
            else:
                return Response({
                    "status": "Failed",
                    "reason": "Item doesn't exist"
                }, 500)

        request.session.modified = True

        return Response(Cart.from_session(request.session['cart_contents']), 200)
