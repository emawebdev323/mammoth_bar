from django import forms 
from .models import Register
from django.forms.utils import ErrorList


class RegisterForm(forms.Form):
    full_name = forms.CharField(
        max_length=3, 
        required=True, 
        label='성명',
        widget=forms.TextInput(attrs={'class':'full-name', 'autofocus': True})
    )
    kakao_id = forms.CharField(
        max_length=50,
        required=False,
        label='카카오아이디',
        widget=forms.TextInput(attrs={'class':'kakao-id'})
    )
    email = forms.EmailField(
        required=False,
        label='이메일',
        widget=forms.EmailInput(attrs={'class': 'email'})
    )
    phone_number = forms.CharField(
        required=True,
        max_length=11,
        label='전화번호',
        help_text=['0-9 사이의 숫자 11자리만 허용됩니다', '전화번호는 010으로 시작해야 합니다'],
        widget=forms.TextInput(attrs={'class': 'phone-number'}),
    )

    def clean_full_name(self):
        full_name = self.cleaned_data.get('full_name')

        if len(full_name) > 3:
            raise forms.ValidationError('Name is too long.')
        return full_name
    
    def clean_kakao_id(self):
        kakao_id = self.cleaned_data.get('kakao_id')
        qs = Register.objects.filter(kakao_id__icontains=kakao_id)
        
        if qs.exists():
            raise forms.ValidationError('kakao id already exists.',)
        return kakao_id
    
    def clean_email(self):
        pass 

    def clean_phone_number(self):
        phone_number = self.cleaned_data.get('phone_number')

        if not len(phone_number) == 11:
            self.add_error('phone_number', 'Phone number must contain 11 numbers')
        
        if not phone_number.startswith('010'):
            self.add_error('phone_number', 'Phone number must start with 010')

        if not phone_number.isdigit():
            self.add_error('phone_number', 'Phone number can only contain whole numbers')
        return phone_number
        
class ReserveForm(RegisterForm):
    email = forms.CharField(
        label='이메일',
        widget=forms.HiddenInput()
    )