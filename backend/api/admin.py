from django.contrib import admin

# Register your models here.

from .models.event import Event
from .models.booth import Booth
from .models.guest import Guest
from .models.announcement import Announcement
from .models.program_item import ProgramItem

admin.site.register(Event)
admin.site.register(Booth)
admin.site.register(Guest)
admin.site.register(Announcement)
admin.site.register(ProgramItem)
