from django.shortcuts import render, redirect
from django.views import View


class HomeView(View):
    def get(self, request):
        return render(request, "home/index.html")
    

class RecentView(View):
    def get(self, request):
        return render(request, "recent/index.html")
    

class AllFilesView(View):
    def get(self, request):
        return render(request, "all_files/index.html")


class AllFoldersView(View):
    def get(self, request):
        return render(request, "all_folders/index.html")


class ProfileView(View):
    def get(self, request):
        return render(request, "profile/index.html")
    

class ImageFilesView(View):
    def get(self, request):
        return render(request, "images/index.html")
    

class VideoFilesView(View):
    def get(self, request):
        return render(request, "videos/index.html")
    

class FolderDetailView(View):
    def get(self, request, folder_slug):
        return render(request, "folder_details/index.html")
        
        
class ComparePlansView(View):
    def get(self, request):
        return render(request, "compare_plans/index.html")