# Generated by Django 4.2.7 on 2023-12-24 20:07

import accounts.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0002_customuser_hashed_token"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="hashed_token",
            field=accounts.models.CustomTextField(),
        ),
    ]
