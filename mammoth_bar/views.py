from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .forms import RegisterForm, ReserveForm
from .models import Register, Reserve

# utils
from utils.geo_location import get_user_ip

def home_view(request):
    return render(request, 'mammoth_bar/home.html', {})

def fetch_user_ip_view(request):
    user_ip = get_user_ip(request)
    return JsonResponse(user_ip, safe=True, status=200)

def register_view(request):
    form = RegisterForm(request.POST or None)
    context = {'form': form}

    if request.method == 'POST':
        if form.is_valid():
            full_name = form.cleaned_data.get('full_name')
            kakao_id = form.cleaned_data.get('kakao_id')
            email = form.cleaned_data.get('email')
            phone_number = form.cleaned_data.get('phone_number')

            # instance = Register.objects.create(
            #     full_name = full_name,
            #     kakao_id = kakao_id,
            #     email = email,
            #     phone_number = phone_number
            # )
            return redirect('mammoth_bar:home')
    return render(request, 'mammoth_bar/register.html', context)

def reserve_view(request):
    form = ReserveForm(request.POST or None)
    context = {'form': form}

    if request.method == 'POST':
        if form.is_valid():
            full_name = form.cleaned_data.get('full_name')
            kakao_id = form.cleaned_data.get('kakao_id')
            phone_number = form.cleaned_data.get('phone_number')
            # obj = Reserve.object.create(
            #     full_name = full_name,
            #     kakao_id = kakao_id,
            #     phone_number = phone_number
            # )
    return render(request, 'mammoth_bar/reserve.html', context)

def detail_view(request, phone_number):
    # print(dir(request))
    print(dir(request.session))
    if not phone_number.isdigit():

        pass
    return HttpResponse(phone_number)