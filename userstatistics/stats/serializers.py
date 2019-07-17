from rest_framework import serializers
from stats.models import LoginDates
from accounts.models import CustomUser


class LoginDatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginDates
        fields = ('month', 'value')


class UserDetailsSerializer(serializers.ModelSerializer):
    statistics = LoginDatesSerializer(many=True)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'tel', 'gender',
                  'date_joined', 'statistics', 'is_active', 'is_staff', 'photo')


class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ('id', 'first_name', 'last_name')
