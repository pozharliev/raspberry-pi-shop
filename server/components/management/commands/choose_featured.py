# from server.components.models import Featured, Component
#
# if __name__ == "__main__":
#     Featured.objects.all().delete()
#
#     print('Choose 5 ids of products by order')
#
#     for i in range(5):
#         id_of_component = int(input())
#         component = Component.objects.get(id=id_of_component)
#
#         featured_component = Featured(component_id=id_of_component, order=i-1)
#         featured_component.save()

from django.core.management.base import BaseCommand, CommandError
from components.models import Featured, Component


class Command(BaseCommand):
    help = 'Chooses featured components'

    def add_arguments(self, parser):
        parser.add_argument('ids', nargs='+', type=int)

    def handle(self, *args, **options):
        Featured.objects.all().delete()

        self.stdout.write(self.style.SUCCESS("Choose 5 ids of products by order"))

        order = 0

        for component_id in options['ids']:
            component = Component.objects.get(id=component_id)

            featured_component = Featured(component=component, order=order)
            featured_component.save()

            self.stdout.write(self.style.SUCCESS('Done'))

            order = order + 1
