from django.db import models
from django.contrib.auth.models import User

class UserDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    description = models.TextField()
    interests = models.CharField(max_length=100)
    residence = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    avatar_image = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name