from django.urls import path
from .views import (
    HomeView, ProfileView, RecentView, AllFilesView, ImageFilesView,
    VideoFilesView, FolderDetailView, AllFoldersView, ComparePlansView
)

app_name = "home"
urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("recent/", RecentView.as_view(), name="recent"),
    path("file/all/", AllFilesView.as_view(), name="all-files"),
    path("folder/all/", AllFoldersView.as_view(), name="all-folders"),
    path("image/all/", ImageFilesView.as_view(), name="all-images"),
    path("video/all/", VideoFilesView.as_view(), name="all-videos"),
    path("folder/<str:folder_slug>/", FolderDetailView.as_view(), name="folder-details"),
    path("compare-plans/", ComparePlansView.as_view(), name="compare-plans")
]