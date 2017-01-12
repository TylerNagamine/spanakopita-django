from django.contrib.auth.models import User
from recipehelper.models import Timer
from recipehelper.permissions import IsOwner, IsAdmin
from recipehelper.serializers import TimerSerializer, UserSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import list_route

class TimerViewSet(viewsets.ModelViewSet):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer
    #permission_classes = (IsOwner, IsAdmin)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    @list_route(url_path='owner')
    def get_for_owner(self, request):
        user = self.request.user
        timers = Timer.objects.filter() #owner=user)
        serializer = self.get_serializer(timers, many=True)
        return Response(serializer.data)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
