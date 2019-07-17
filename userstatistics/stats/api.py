from stats.models import LoginDates
from rest_framework import viewsets, permissions, generics
from .serializers import UsersSerializer, UserDetailsSerializer
from accounts.models import CustomUser


class UserDetailsViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserDetailsSerializer

    queryset = CustomUser.objects.all()


class UsersViewset(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    permission_classes = [
        permissions.AllowAny
    ]

    queryset = CustomUser.objects.all()
