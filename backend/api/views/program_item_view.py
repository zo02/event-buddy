from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError
from api.models.program_item import ProgramItem
from api.serializers.program_item_serializer import ProgramItemSerializer

class ProgramItemListCreateView(generics.ListCreateAPIView):
    serializer_class = ProgramItemSerializer

    def get_queryset(self):
        event = self.request.query_params.get('event')
        if event:
            return ProgramItem.objects.filter(event=event)
        return ProgramItem.objects.all()
    
    def get_permissions(self):
        if self.request.method == 'GET':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save()

class ProgramItemRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProgramItem.objects.all()
    serializer_class = ProgramItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save()