from rest_framework import routers
from .api import UsersViewset

router = routers.DefaultRouter()
router.register('api/stats', UsersViewset, 'stats')

urlpatterns = router.urls
