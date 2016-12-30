from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from recipehelper import views

urlpatterns = [
    url(r'^timers/$', views.timer_list),
    url(r'^timers/(?P<pk>[0-9]+)/$', views.timer_detail)
]

urlpatterns = format_suffix_patterns(urlpatterns)