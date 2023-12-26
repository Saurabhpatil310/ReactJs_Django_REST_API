from django.db import models

# Create your models here.

class Complain(models.Model):
    id=models.IntegerField(primary_key=True)
    title=models.CharField(max_length=200)
    description = models.CharField(max_length=200)