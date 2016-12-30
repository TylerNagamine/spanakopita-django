from rest_framework import serializers
from recipehelper.models import Timer

class TimerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Timer
        fields = ('id', 'created', 'title', 'type', 'duration')

# class TimerSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     created = serializers.DateTimeField()
#     title = serializers.CharField(required=False, allow_blank=True, max_length=100)
#     type = serializers.CharField(required=True, allow_blank=False, max_length=2)
#     duration = serializers.IntegerField(default=0)

#     def create(self, validated_data):
#         return Timer.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         instance.id = validated_data.get('id', instance.id)
#         instance.created = validated_data.get('created', instance.created)
#         instance.title = validated_data.get('title', instance.title)
#         instance.type = validated_data.get('type', instance.type)
#         instance.duration = validated_data.get('duration', instance.duration)
#         instance.save()
#         return instance
