from django.shortcuts import render
from django.views import View


class RegisterView(View):
    def get(self, request):
        return render(request, "auth_users/register.html")
        
        
class LoginView(View):
    def get(self, request):
        return render(request, "auth_users/login.html")
