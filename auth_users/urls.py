from django.urls import path

from .views import (
    LoginView, RegisterView
)

app_name = "auth_users"
urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login")
]