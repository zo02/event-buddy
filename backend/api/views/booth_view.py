from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError
from api.models.booth import Booth
from api.serializers.booth_serializer import BoothSerializer

class BoothListCreateView(generics.ListCreateAPIView):
    serializer_class = BoothSerializer

    def get_queryset(self):
        event = self.request.query_params.get('event')
        if event:
            return Booth.objects.filter(event=event)
        return Booth.objects.all()
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save()

class BoothRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Booth.objects.all()
    serializer_class = BoothSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save()