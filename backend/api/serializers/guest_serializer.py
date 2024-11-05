from api.models.guest import Guest
from rest_framework import serializers

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = ['id', 'name', 'role', 'picture', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']