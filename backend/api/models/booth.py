from django.db import models
from .event import Event
from rest_framework import serializers

class Booth(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='booths')
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=100)
    open_time = models.DateTimeField()
    close_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name