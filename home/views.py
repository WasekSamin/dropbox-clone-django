from django.shortcuts import render, redirect
from django.views import View


class HomeView(View):
    def get(self, request):
        return render(request, "home/home.html")
    

class RecentView(View):
    def get(self, request):
        return render(request, "recent/recent.html")


class ProfileView(View):
    def get(self, request):
        return render(request, "profile/profile.html")