# Generated by Django 4.2.7 on 2023-12-24 20:15

import accounts.custom_fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0003_alter_customuser_hashed_token"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="email",
            field=accounts.custom_fields.CustomEmailField(max_length=254, unique=True),
        ),
    ]
