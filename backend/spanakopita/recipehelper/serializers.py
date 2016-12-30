from django.contrib.auth.models import User
from rest_framework import serializers
from recipehelper.models import Timer

class TimerSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Timer
        fields = ('id', 'created', 'title', 'type', 'duration', 'owner')

class UserSerializer(serializers.ModelSerializer):
    timer = serializers.PrimaryKeyRelatedField(many=True, queryset=Timer.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'timer')
