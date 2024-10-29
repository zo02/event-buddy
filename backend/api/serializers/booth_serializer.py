from api.models.booth import Booth
from rest_framework import serializers

class BoothSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booth
        fields = ['id', 'name', 'description', 'location', 'open_time', 'close_time', 'created_at', 'updated_at', 'event']
        read_only_fields = ['created_at', 'updated_at']