from django.urls import path
from api.views import announcement_view, booth_view, event_view, guest_view, program_item_view

urlpatterns = [
    path("announcements", announcement_view.AnnouncementListCreateView.as_view(), name="announcement-list"),
    path("announcements/<int:pk>/", announcement_view.AnnouncementRetrieveUpdateDeleteView.as_view(), name="announcement-detail"),
    path("booths", booth_view.BoothListCreateView.as_view(), name="booth-list"),
    path("booths/<int:pk>/", booth_view.BoothRetrieveUpdateDeleteView.as_view(), name="booth-detail"),
    path("guests", guest_view.GuestListCreateView.as_view(), name="guest-list"),
    path("guests/<int:pk>/", guest_view.GuestRetrieveUpdateDeleteView.as_view(), name="guest-detail"),
    path("program_items", program_item_view.ProgramItemListCreateView.as_view(), name="program_item-list"),
    path("program_items/<int:pk>/", program_item_view.ProgramItemRetrieveUpdateDeleteView.as_view(), name="program_item-detail"),
    path("events/public", event_view.EventListPublic.as_view(), name="event-list-public"),
    path("events/user", event_view.EventListUser.as_view(), name="event-list-user"),
    path("events/hidden", event_view.EventListHidden.as_view(), name="event-list-hidden"),
    path("events", event_view.EventCreate.as_view(), name="event-create"),
    path("events/<int:pk>/", event_view.EventUpdateDelete.as_view(), name="event-update-delete"),
]