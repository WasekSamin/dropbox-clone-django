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


class ProfileView(View):
    def get(self, request):
        return render(request, "profile/index.html")
    

class ImageFilesView(View):
    def get(self, request):
        return render(request, "images/index.html")