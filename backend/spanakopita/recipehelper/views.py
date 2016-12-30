from recipehelper.models import Timer
from recipehelper.serializers import TimerSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class TimerList(APIView):
    def get(self, request, format=None):
        timers = Timer.objects.all()
        serializer = TimerSerializer(timers, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TimerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TimerDetail(APIView):
    def get_object(self, pk):
        try:
            return Timer.objects.get(pk=pk)
        except Timer.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        timer = self.get_object(pk)
        serializer = TimerSerializer(timer)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        timer = self.get_object(pk)
        serializer = TimerSerializer(timer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        timer = self.get_object(pk)
        timer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
