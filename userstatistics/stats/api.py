from stats.models import LoginDates
from rest_framework import viewsets, permissions
from .serializers import LoginDatesSerializer, UsersSerializer
from django.contrib.auth.models import User


class UsersViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer
