# Generated by Django 4.2.7 on 2023-12-24 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Complain",
            fields=[
                ("id", models.IntegerField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=200)),
                ("description", models.CharField(max_length=200)),
            ],
        ),
    ]