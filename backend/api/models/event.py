from django.db import models
from django.contrib.auth.models import User
from .guest import Guest

class Event(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=100)
    ticket_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    guests = models.ManyToManyField(Guest, related_name='events', blank=True) 
    participants = models.ManyToManyField(User, related_name='participant_events', blank=True)
    picture = models.CharField(max_length=100, null=True, blank=True)
    map_pdf = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='authored_events')
    status = models.CharField(max_length=100, blank=True)
    visibility = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']