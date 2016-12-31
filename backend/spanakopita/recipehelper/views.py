from django.contrib.auth.models import User
from recipehelper.models import Timer
from recipehelper.permissions import IsOwner, IsAdmin
from recipehelper.serializers import TimerSerializer, UserSerializer
from rest_framework import viewsets

class TimerViewSet(viewsets.ModelViewSet):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer
    permission_classes = (IsOwner,IsAdmin)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer