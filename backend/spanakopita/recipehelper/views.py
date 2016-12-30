from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from recipehelper.models import Timer
from recipehelper.serializers import TimerSerializer


@api_view(['GET', 'POST'])
def timer_list(request, format=None):
    if request.method == 'GET':
        timers = Timer.objects.all()
        serializer = TimerSerializer(timers, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = TimerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'DELETE'])
def timer_detail(request, pk, format=None):
    try:
        timer = Timer.objects.get(pk=pk)
    except Timer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TimerSerializer(timer)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TimerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        timer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
