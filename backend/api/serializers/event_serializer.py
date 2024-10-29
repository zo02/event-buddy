from api.models.event import Event
from rest_framework import serializers

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'details', 'date', 'location', 'ticket_price', 'picture', 'map_pdf', 'created_at', 'updated_at', 'owner']
        read_only_fields = ['created_at', 'updated_at']