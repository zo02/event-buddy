from django.db import models
from django.contrib.auth.models import User
from .event import Event

class ProgramItem(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    participants_limit = models.IntegerField(blank=True, null=True)
    participants = models.ManyToManyField(User, related_name='program_items', blank=True)
    requires_registration = models.BooleanField(default=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='program_items')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['start_time', 'location']