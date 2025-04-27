from django.urls import path
from .views import (
    HomeView, ProfileView, RecentView,
)

app_name = "home"
urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("recent/", RecentView.as_view(), name="recent"),
]