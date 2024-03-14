from django.db import migrations
from api.user.models import CustomerUser


class Migration(migrations.Migration):

    def seed_data(apps,schema_editor):
        user=CustomerUser(name="rohith",
                          email="rohithkp549@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="9746783091",
                          gender="Male")
        user.set_password("12345")
        user.save()

    

    dependencies = [
        
    ]

    operations = [
        migrations.RunPython(seed_data),
        ]