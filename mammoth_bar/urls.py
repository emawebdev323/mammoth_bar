from django.urls import path 
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    home_view,
    fetch_user_ip_view,
    register_view,
    reserve_view,
    detail_view,
)

app_name = 'mammoth_bar'

urlpatterns = [
    path('', home_view, name='home'),
    path('fetch/user/ip/', fetch_user_ip_view, name="validate-ip"),
    path('register/', register_view, name='register'),
    path('reserve/', reserve_view, name='reserve'),
    path('<str:phone_number>/detail/', detail_view, name='detail')
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)        
