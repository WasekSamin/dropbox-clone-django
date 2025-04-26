from django.db import models
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
import shortuuid


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            return ValueError("Email field is required!")
        elif not username:
            return ValueError("Username field is required!")

        email = self.normalize_email(email)

        user = self.model(email=email, username=username)
        user.set_password(password)
        user.save()

    def create_superuser(self, email, username, password=None):
        if not email:
            return ValueError("Email field is required!")
        elif not username:
            return ValueError("Username field is required!")

        email = self.normalize_email(email)

        user = self.model(email=email, username=username)
        user.set_password(password)
        user.is_staff = True
        user.is_superuser = True
        user.is_verified = True
        user.save()


class User(AbstractBaseUser):
    slug = models.SlugField(max_length=120, null=True, blank=True)
    username = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_ban = models.BooleanField(default=False)
    ban_reason = models.TextField(null=True, blank=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(null=True, blank=True)
    added_by = models.ForeignKey("auth_users.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="user_added_by")
    updated_by = models.ForeignKey("auth_users.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="user_updated_by")

    class Meta:
        ordering = ("-id", )

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

    def __str__(self):
        return self.email

    def get_user_obj_using_email(self, email):
        try:
            user_obj = User.objects.get(email=email)
        except User.DoesNotExist:
            return None
        else:
            return user_obj
        

@receiver(post_save, sender=User)
def create_user(sender, instance=None, created=False, **kwargs):
    if created:
        instance.slug = f"{shortuuid.uuid()}{instance.id}"
        instance.save(update_fields=["slug"])