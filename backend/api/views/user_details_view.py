from api.models.user_details import UserDetails
from rest_framework import generics
from api.serializers.user_details_serializer import UserDetailsSerializer
from rest_framework.permissions import AllowAny

class CreateUserDetailsView(generics.CreateAPIView):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailsSerializer
    permission_classes = [AllowAny]