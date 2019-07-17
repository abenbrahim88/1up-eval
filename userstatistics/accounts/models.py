from django.db import models
from django.contrib.auth.models import AbstractUser


# Create the custom user model
class CustomUser(AbstractUser):
    #add the extra fields(gender,tel,picture)
    gender = models.CharField(max_length=10, default="", null=True)
    tel = models.CharField(max_length=20, default="", null=True)
    photo = models.ImageField(upload_to='users')

    def __str__(self):
        return self.username
