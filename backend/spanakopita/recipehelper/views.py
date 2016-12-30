from django.contrib.auth.models import User
from recipehelper.models import Timer
from recipehelper.permissions import IsOwner
from recipehelper.serializers import TimerSerializer, UserSerializer
from rest_framework import generics, permissions

class TimerList(generics.ListCreateAPIView):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer
    permission_classes = (permissions.IsAuthenticated,IsOwner,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class TimerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer
    permission_classes = (permissions.IsAuthenticated,IsOwner)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer