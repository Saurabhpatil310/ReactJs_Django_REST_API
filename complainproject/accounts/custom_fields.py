# custom_fields.py
from django.db import models

class CustomTextField(models.TextField):
    def db_type(self, connection):
        # Specify the field type as a LONGTEXT for MySQL with a key length
        if connection.settings_dict['ENGINE'] == 'django.db.backends.mysql':
            return 'longtext'
        return 'text'

class CustomEmailField(models.EmailField):
    def db_type(self, connection):
        if connection.settings_dict['ENGINE'] == 'django.db.backends.mysql':
            return 'varchar(191)'  # Set your desired length here
        return 'email'
