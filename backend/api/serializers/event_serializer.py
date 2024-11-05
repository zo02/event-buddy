from api.models.event import Event
from rest_framework import serializers

class UserEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'id', 'title', 'details', 'date', 'location', 'ticket_price', 'guests', 'participants',
            'picture', 'map_pdf', 'created_at', 'updated_at', 'status'
        ]
        read_only_fields = ['created_at', 'updated_at']


class ModeratorEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = [
            'id', 'title', 'details', 'date', 'location', 'ticket_price', 'guests', 'participants',
            'picture', 'map_pdf', 'created_at', 'updated_at', 'status', 'visibility'
        ]
        read_only_fields = ['created_at', 'updated_at']