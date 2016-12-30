from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from recipehelper import views

urlpatterns = [
    url(r'^timers/$', views.TimerList.as_view()),
    url(r'^timers/(?P<pk>[0-9]+)/$', views.TimerDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)