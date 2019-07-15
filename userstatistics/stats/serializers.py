from rest_framework import serializers
from stats.models import LoginDates
from django.contrib.auth.models import User


class LoginDatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginDates
        fields = ('login_at',)


class UsersSerializer(serializers.ModelSerializer):
    dates = LoginDatesSerializer(many=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name',
                  'date_joined', 'dates')
