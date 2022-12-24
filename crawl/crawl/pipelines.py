from typing import TypedDict

from asgiref.sync import sync_to_async

from .items import ComponentItem

from components.models import Categories
from stores.models import Store

ComponentType = TypedDict('ComponentType', {
    "name": str,
    "description": str,
    "price": float,
    "category": str,
    "image": str,
    "url": str
})


class CrawlPipeline:
    @sync_to_async
    def get_category(self, category):
        return Categories.objects.get(name=category)

    @sync_to_async
    def get_store(self, store):
        return Store.objects.get(store_name=store)

    async def process_item(self, item: ComponentType, spider):
        component = ComponentItem(
            name=item['name'],
            description=item['description'],
            price=float(item['price']),
            category=await self.get_category(item['category']),
            image=item['image'],
            url=item['url'],
            store=await self.get_store(spider.name)
        )

        await sync_to_async(component.save)()

        return component

