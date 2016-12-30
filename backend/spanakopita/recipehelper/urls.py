from django.conf.urls import url
from recipehelper import views

urlpatterns = [
    url(r'^timers/$', views.timer_list),
    url(r'^timers/(?P<pk>[0-9]+)/$', views.timer_detail)
]