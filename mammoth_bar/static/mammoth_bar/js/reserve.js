const reserveFormHelpTextShow = document.querySelector('.reserve-form-help-text-show')
const reserveFormHelpTextHide = document.querySelector('.reserve-form-help-text-hide')
const reserveFormHelpTextUL = document.querySelector('.reserve-form-help-text-ul')

const toggleBtns = new Array(reserveFormHelpTextShow, reserveFormHelpTextHide)

toggleBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.currentTarget == reserveFormHelpTextShow) {
            handleShowHelpTextBtn()
        }
        if (event.currentTarget == reserveFormHelpTextHide) {
            handleHideHelpTextBtn()
        }
    })
})

function handleShowHelpTextBtn() {
    // show helpTextHide btn
    reserveFormHelpTextHide.classList.add('toggle-help-text-btn')

    // add help text & remove helpTextShow btn
    reserveFormHelpTextUL.classList.add('show-reserve-form-help-text-ul')
    reserveFormHelpTextShow.classList.remove('toggle-help-text-btn')
}

function handleHideHelpTextBtn() {
    // show helpTextShow btn
    reserveFormHelpTextShow.classList.add('toggle-help-text-btn')

    // remove help text & remove helpTextHide btn
    reserveFormHelpTextUL.classList.remove('show-reserve-form-help-text-ul')
    reserveFormHelpTextHide.classList.remove('toggle-help-text-btn')
}