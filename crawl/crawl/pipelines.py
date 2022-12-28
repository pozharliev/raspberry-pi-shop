from typing import TypedDict
from asgiref.sync import sync_to_async

from .items import ComponentItem
from components.models import Categories, Component
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
    def _get_category(self, category: Categories) -> Categories:
        return Categories.objects.get(name=category)

    @sync_to_async
    def _get_store(self, store: Store) -> Store:
        return Store.objects.get(store_name=store)

    @sync_to_async
    def _item_exists(self, name: str, store: Store) -> bool:
        return Component.objects \
               .filter(name=name) \
               .filter(store=store) \
               .exists()

    @sync_to_async
    def _update_item(self, item: ComponentType, store: Store, category: Categories) -> Component:
        component_id = Component.objects \
                       .filter(name=item['name'])\
                       .update(
                            name=item['name'],
                            description=item['description'],
                            price=float(item['price']),
                            category=category,
                            image=item['image'],
                            url=item['url'],
                            store=store
                       )
        return Component.objects.get(name=item['name'])

    async def process_item(self, item: ComponentType, spider):
        store = await self._get_store(spider.name)
        category = await self._get_category(item['category'])

        if await self._item_exists(item['name'], store):
            component = await self._update_item(item, store, category)
        else:
            component = ComponentItem(
                name=item['name'],
                description=item['description'],
                price=float(item['price']),
                category=category,
                image=item['image'],
                url=item['url'],
                store=store
            )

        await sync_to_async(component.save)()

        return component

