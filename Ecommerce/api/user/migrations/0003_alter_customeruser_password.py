# Generated by Django 5.0.1 on 2024-02-29 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_customeruser_created_at_customeruser_gender_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeruser',
            name='password',
            field=models.CharField(max_length=150, null=True),
        ),
    ]
