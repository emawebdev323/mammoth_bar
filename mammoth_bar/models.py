from django.db import models
from django.urls import reverse
import uuid


class Register(models.Model):
    user_uuid = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    full_name = models.CharField(max_length=50)
    kakao_id = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Registered Customers'
        ordering = ['-created']

    def get_absolute_url(self):
        return reverse(
            'mammoth_bar:detail', 
            kwargs={'phone_number':self.phone_number}
        )

class Reserve(models.Model):
    user_uuid = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    full_name = models.CharField(max_length=50)
    kakao_id = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Reservations'
        ordering = ['-updated']

    def get_absolute_url(self):
        return reverse(
            'mammoth_bar:reservation-detail',
            kwargs={'phone_number':self.phone_number}
        )