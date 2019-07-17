from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import authenticate
from stats.models import LoginDates
from datetime import datetime
import locale


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'first_name', 'last_name',
                  'gender', 'email', 'tel', 'password', 'photo')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # create the user
        user = CustomUser.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'], first_name=validated_data['first_name'], last_name=validated_data['last_name'], photo=validated_data['photo'], tel=validated_data['tel'], gender=validated_data['gender'])
        # initialize the user login stats at registeration
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        for month in months:
            stat = LoginDates(user=user, month=month, value=0)
            if month == datetime.now().strftime("%b"):
                stat.value = 1
            stat.save()
        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            # update user stats on login
            stat = LoginDates.objects.get(
                user=user, month=datetime.now().strftime("%b"))
            stat.value += 1
            stat.save()
            return user
        raise serializers.ValidationError("Incorrect Credentials")
