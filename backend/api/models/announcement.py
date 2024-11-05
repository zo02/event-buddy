from django.db import models
from .event import Event
from django.contrib.auth.models import User

class Announcement(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='announcements')

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']