from django.contrib.auth.models import AbstractUser
from django.db import models
from .custom_fields import CustomTextField
from .custom_fields import CustomEmailField


class CustomUser(AbstractUser):
    email = CustomEmailField(unique=True)
    hashed_token = CustomTextField()  

    def __str__(self):
        return self.username
    
