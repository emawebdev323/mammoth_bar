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