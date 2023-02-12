from django.http import HttpRequest
from stores.models import Stores
from stores.serializers import StoreSerializer


class Cart:
    """
    Cart service class that has the following features:
        * Converting cart contents to a serialized json
    """
    def __init__(self, session):
        pass

    @staticmethod
    def empty_cart(request: HttpRequest) -> None:
        request.session['cart_contents'] = {}
        request.session.modified = True

    @staticmethod
    def from_session(request: HttpRequest) -> dict:
        """
        Converts cart contents to a serialized json with utility values
        Args:
            request: The request

        Returns:
            cart: Dict with utility values and cart contents
        """
        cart_contents = request.session.get('cart_contents', {})

        cart = {
            "totals": {
                "total": 0,
                "subtotal": 0,
                "discount": 0,
                "shipping": 0,
            },
            "items": cart_contents.get('items', {}),
            "stores": [],
        }

        stores = []

        for _, pair in cart_contents.items():
            for _, item in pair.items():
                cart["totals"]["total"] += float(item['price']) * float(item['quantity'])
                cart["totals"]["subtotal"] += float(item['price']) * float(item['quantity'])

                if item['store'] not in stores:
                    stores.append(item['store']['id'])

        for store_id in stores:
            store = Stores.objects.get(id=store_id)
            serialized_store = StoreSerializer(store, many=False)

            cart['stores'].append(serialized_store.data)

        return cart
