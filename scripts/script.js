let menuBtn = document.querySelector('.mob-menu')
let childs = document.querySelectorAll('.nav-downloads-child')
let childContainer = document.querySelector('.child-container')


menuBtn.addEventListener('click', ()=>{
    childs.forEach((e)=>{
        e.classList.toggle('display')
    })
})