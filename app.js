let closeBtn = document.querySelector('#closeBtn')
let acceptBtn = document.querySelector('#yesBtn')
let showBtn = document.querySelector('.modalBtn')
let modal_div = document.querySelector('.modal')

showBtn.addEventListener('click', () => {
    modal_div.classList.remove('hide')
})

closeBtn.addEventListener('click', () => {
    modal_div.classList.add('hide')
})

acceptBtn.addEventListener('click', () => {
    modal_div.classList.add('hide')
})