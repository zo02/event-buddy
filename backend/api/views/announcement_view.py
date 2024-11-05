from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError
from api.models.announcement import Announcement
from api.serializers.announcement_serializer import AnnouncementSerializer

class AnnouncementListCreateView(generics.ListCreateAPIView):
    serializer_class = AnnouncementSerializer

    def get_queryset(self):
        event = self.request.query_params.get('event')
        if event:
            return Announcement.objects.filter(event=event)
        return Announcement.objects.all()
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class AnnouncementRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save(author=self.request.user)