from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError
from api.models.guest import Guest
from api.serializers.guest_serializer import GuestSerializer
from api.permissions import IsModerator

class GuestListCreateView(generics.ListCreateAPIView):
    serializer_class = GuestSerializer

    def get_queryset(self):
        event = self.request.query_params.get('event')
        if event:
            return Guest.objects.filter(event=event)
        return Guest.objects.all()
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]
    
    def perform_create(self, serializer):
        serializer.save()

class GuestRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer
    permission_classes = [IsModerator]

    def perform_update(self, serializer):
        serializer.save()
