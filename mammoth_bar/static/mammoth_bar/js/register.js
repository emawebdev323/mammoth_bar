const registerFormHelpTextShow = document.querySelector('.register-form-help-text-show')
const registerFormHelpTextHide = document.querySelector('.register-form-help-text-hide')
const registerFormHelpTextUL = document.querySelector('.register-form-help-text-ul')

const toggleBtns = new Array(registerFormHelpTextShow, registerFormHelpTextHide)

toggleBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.currentTarget == registerFormHelpTextShow) {
            handleShowHelpTextBtn()
        }
        if (event.currentTarget == registerFormHelpTextHide) {
            handleHideHelpTextBtn()
        }
    })
})

function handleShowHelpTextBtn() {
    // show helpTextHide btn
    registerFormHelpTextHide.classList.add('toggle-help-text-btn')

    // add help text & remove helpTextShow btn
    registerFormHelpTextUL.classList.add('show-register-form-help-text-ul')
    registerFormHelpTextShow.classList.remove('toggle-help-text-btn')
}

function handleHideHelpTextBtn() {
    // show helpTextShow btn
    registerFormHelpTextShow.classList.add('toggle-help-text-btn')

    // remove help text & remove helpTextHide btn
    registerFormHelpTextUL.classList.remove('show-register-form-help-text-ul')
    registerFormHelpTextHide.classList.remove('toggle-help-text-btn')
}

// ##### VALIDATE USER IP - LOCAL OR FOREIGN #####

// === ipinfo.io urls ===
const url1 = 'https://api.ipinfo.io/lite/8.8.8.8?token=416c3b42e5cc10'
const url2 = 'https://ipinfo.io/8.8.8.8/json?token=416c3b42e5cc10'
const url3 = 'https://ipinfo.io/json?token=416c3b42e5cc10'
const homeURL = window.location.origin

async function fetchUserIP() {
    try {
        const resp = await fetch(`${homeURL}/fetch/user/ip`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (resp.ok) {
            const data = await resp.json()
            
            if (data.ip_type != 'public') {
                window.location.href = `${homeURL}?message=${data.message}`
            }else {
                validateIP(data)
            }

        }else {
            throw {
                status:resp.status,
                statusText:resp.statusText
            }
        }

    } catch (error) {
        console.log(error)
    }
}
fetchUserIP()

async function validateIP(param) {
    const ipInfoURL = `https://api.ipinfo.io/lite/${param.ip}?token=416c3b42e5cc10`

    try {
        const resp = await fetch(ipInfoURL, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (resp.ok) {
            const data = await resp.json()

            if (data.country_code != 'KR') {
                window.location.href = `${homeURL}?message=Validation failed`
            }
            console.log(data)
        }

    } catch (error) {
        
    }
}