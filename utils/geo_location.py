def get_user_ip_address(request):
    remote_address = request.META.get('REMOTE_ADDR')
    http_x_forwared_for = request.META.get('HTTP_X_FORWARDED_FOR')

    context = {}

    if remote_address:
        context.update({'vali_ip': True, 'ip': remote_address, 'message': 'Valid ip address'})
    if http_x_forwared_for:
        context.update({'valid_ip': False, 'ip': None, 'message': 'Invalid ip address'})
        
    return context