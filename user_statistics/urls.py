from django.contrib import admin
from django.urls import path
from .api import RegistrationAPI,LoginAPI



urlpatterns = [
    path('admin/', admin.site.urls),
    path("^auth/register/$", RegistrationAPI.as_view()),
    path("^auth/login/$", LoginAPI.as_view()),
]
