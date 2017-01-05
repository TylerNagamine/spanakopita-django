from django.conf.urls import url, include
from recipehelper import views
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView

router = DefaultRouter()

router.register(r'timers', views.TimerViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^api/', include(router.urls)),
    url(r'^api_auth/', include('rest_framework.urls', namespace='rest_framework'))
]
