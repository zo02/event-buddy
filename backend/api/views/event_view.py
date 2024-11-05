from rest_framework import generics, permissions
from api.models.event import Event
from api.serializers.event_serializer import UserEventSerializer, ModeratorEventSerializer
from api.permissions import IsModerator

class EventListPublic(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = UserEventSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return Event.objects.filter(visibility='public')


class EventListUser(generics.ListAPIView):
    serializer_class = UserEventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Event.objects.filter(author=self.request.user)


class EventListHidden(generics.ListAPIView):
    serializer_class = ModeratorEventSerializer
    permission_classes = [permissions.IsAuthenticated, IsModerator]

    def get_queryset(self):
        return Event.objects.filter(visibility='hidden')


class EventCreate(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = UserEventSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, visibility='public')


class EventUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        if self.request.user.groups.filter(name='Moderator').exists():
            return ModeratorEventSerializer
        return UserEventSerializer

    def get_queryset(self):
        if self.request.user.groups.filter(name='Moderator').exists():
            return Event.objects.all()
        return Event.objects.filter(author=self.request.user)