import requests


class ImageService:
    @staticmethod
    def save_image(url: str):
        img = requests.get(url).content
