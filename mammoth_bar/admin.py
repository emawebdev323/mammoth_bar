from django.contrib import admin
from .models import Register, Reserve


@admin.register(Register)
class RegisterAdmin(admin.ModelAdmin):
    list_display = [
        'user_uuid', 
        'full_name', 
        'kakao_id', 
        'email', 
        'phone_number'
    ]

@admin.register(Reserve)
class ReserveAdmin(admin.ModelAdmin):
    list_display = [
        'user_uuid', 
        'full_name', 
        'kakao_id', 
        'phone_number'
    ]