from api.models.user_details import UserDetails
from rest_framework import serializers

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ['id', 'user', 'first_name', 'description', 'interests', 'residence', 'status', 'avatar_image']