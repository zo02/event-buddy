from django.db import models
from .event import Event
from rest_framework import serializers

class Guest(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    #picture = models.ImageField(upload_to='guest_pictures/', blank=True)
    picture = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='guests')

    def __str__(self):
        return self.name