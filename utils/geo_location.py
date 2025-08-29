def get_user_ip(request):
    # remote_address = request.META.get('REMOTE_ADDR')
    http_x_forwared_for = request.META.get('HTTP_X_FORWARDED_FOR')
    remote_address = '192.168.12.205' 
    # http_x_forwared_for = '8.38.149.0'

    context = {
        'ip_type': None,
        'ip': None,
        'message': 'Unable to verify your IP'
    }

    if remote_address:
        context.update(
            {
                'ip_type': 'public',
                'ip': remote_address, 
                'message': 'Valid IP address'
            }
        )
    if http_x_forwared_for:
        context.update(
            {
                'ip_type': 'proxy',
                'ip': http_x_forwared_for[0], 
                'message': 'Proxy IP is not allowed'
            }
        )
        
    return context