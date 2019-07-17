from django.urls import path, include
from rest_framework import routers
from .api import UsersViewset, UserDetailsViewset

urlpatterns = [
    path('api/users/', UsersViewset.as_view({'get': 'list'}), name='users'),
    path('api/stats/<int:pk>/',
         UserDetailsViewset.as_view({'get': 'retrieve'}), name='stats')
]
