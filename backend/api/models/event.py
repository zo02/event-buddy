from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers

class Event(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=100)
    ticket_price = models.DecimalField(max_digits=10, decimal_places=2)
    #picture = models.ImageField(upload_to='event_pictures/', blank=True)
    #map_pdf = models.FileField(upload_to='event_maps/', blank=True, null=True)
    picture = models.CharField(max_length=100, blank=True)
    map_pdf = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title