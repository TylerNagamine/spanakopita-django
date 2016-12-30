from recipehelper.models import Timer
from recipehelper.serializers import TimerSerializer
from rest_framework import generics

class TimerList(generics.ListCreateAPIView):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer

class TimerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Timer.objects.all()
    serializer_class = TimerSerializer
