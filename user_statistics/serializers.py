from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import LoginDates

#create user serialzer for registration
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user

# user serializer
class UserSerializer(serializers.ModelSerializer):
    dates = serializers.StringRelatedField(many=True)
    class Meta:
        model = User
        fields = ('id', 'username','dates')


# login serializer
class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            dt=LoginDates(user) # we add date to logindates table
            dt.save()
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")