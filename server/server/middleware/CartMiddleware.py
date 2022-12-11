from django.http import HttpRequest


class CartMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request: HttpRequest):
        if request.session.get('cart_contents') is None:
            request.session['cart_contents'] = {}
            request.session['cart_contents']['items'] = {}

        return self.get_response(request)
