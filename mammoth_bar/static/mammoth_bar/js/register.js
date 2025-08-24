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


// Get user ip address
const getUserIP = async() => {

    // this url is just for custom ip look
    const url1 = 'https://api.ipinfo.io/lite/8.8.8.8?token=416c3b42e5cc10'

    // this url does both: custom ip lookup and current ip address
    const url2 = 'https://ipinfo.io/8.8.8.8/json?token=416c3b42e5cc10'

    try {
        const response = await fetch(url1)

        if(response.ok) {
            const data = await response.json()
            console.log(data)
        }else {
            throw new Errror(`There was an error.`)
        }

    } catch (error) {
        console.log(error.message)
    }
}

getUserIP()