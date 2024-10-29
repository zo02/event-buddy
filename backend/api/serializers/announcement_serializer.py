from api.models.announcement import Announcement
from rest_framework import serializers

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ['id', 'title', 'details', 'created_at', 'updated_at', 'event']
        read_only_fields = ['created_at', 'updated_at']
