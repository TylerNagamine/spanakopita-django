from django.db import models

# Create your models here.
class Timer(models.Model):
    STOPWATCH = 'sw'
    TIMER = 't'

    TIMER_CHOICES = (
        (TIMER, 'timer'),
        (STOPWATCH, 'stopwatch')
    )

    created = models.DateTimeField(auto_now_add=True)
    duration = models.IntegerField(default=0)
    title = models.CharField(max_length=100, blank=True, null=False)
    type = models.CharField(max_length=2, choices=TIMER_CHOICES, default=STOPWATCH)
    owner = models.ForeignKey('auth.User', related_name='timer', on_delete=models.CASCADE)
