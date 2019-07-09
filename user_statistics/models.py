from django.db import models
from django.contrib.auth.models import User
from datetime import date


#model to store login dates
class LoginDates(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    login_at = models.DateField(default=date.today)


    def __str__(self):
        return '%d: %d' % (self.login_at.year, self.login_at.month)



