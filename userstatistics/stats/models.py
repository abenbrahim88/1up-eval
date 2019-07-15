from django.db import models
from django.contrib.auth.models import User


# Create your mode

class LoginDates(models.Model):
    user = models.ForeignKey(User, related_name='dates',
                             on_delete=models.CASCADE)
    login_at = models.DateTimeField(auto_now_add=True)
