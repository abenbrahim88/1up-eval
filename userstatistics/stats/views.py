from stats.models import LoginDates
from stats.serializers import LoginDatesSerializer
from rest_framework import generics


class LoginDatesListCreate(generics.ListCreateAPIView):
    queryset = LoginDates.objects.all()
    serializer_class = LoginDatesSerializer
