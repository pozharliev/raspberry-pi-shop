from server.components.models import Featured, Component

if __name__ == "__main__":
    Featured.objects.all().delete()

    print('Choose 5 ids of products by order')

    for i in range(5):
        id_of_component = int(input())
        component = Component.objects.get(id=id_of_component)

        featured_component = Featured(component_id=id_of_component, order=i-1)
        featured_component.save()