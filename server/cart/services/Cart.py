from stores.models import Store
from stores.serializers import StoreSerializer


class Cart:
    """
    Cart service class that has the following features:
        * Converting cart contents to a serialized json
        * Saving the session to the database
    """
    def __init__(self, session):
        pass

    @staticmethod
    def from_session(cart_contents: dict):
        """
        Converts cart contents to a serialized json with utility values
        Args:
            cart_contents: Dict with the cart contents

        Returns:
            cart: Dict with utility values and cart contents
        """
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
                cart["totals"]["total"] += float(item['price'])
                cart["totals"]["subtotal"] += float(item['price'])

                if item['store'] not in stores:
                    stores.append(item['store'])

        for store_id in stores:
            store = Store.objects.get(id=store_id)
            serialized_store = StoreSerializer(store, many=False)

            cart['stores'].append(serialized_store.data)

        return cart
