from api.models.program_item import ProgramItem
from rest_framework import serializers

class ProgramItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramItem
        fields = ['id', 'title', 'details', 'start_time', 'end_time', 'location', 'type', 'participants_limit', 'participants', 'requires_registration', 'event', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']