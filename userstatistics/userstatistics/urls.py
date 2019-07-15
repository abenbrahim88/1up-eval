from django.urls import path, include
from django.contrib import admin
urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('stats.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls)
]
