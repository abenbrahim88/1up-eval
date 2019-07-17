from django.db import models
from accounts.models import CustomUser


# Create your mode

class LoginDates(models.Model):
    user = models.ForeignKey(CustomUser, related_name='statistics',
                             on_delete=models.CASCADE)
    month = models.CharField(max_length=10, null=True)
    value = models.PositiveIntegerField(default=0, null=True)
