const toggle=document.getElementsByClassName('toggle-btn')[0]
const nav=document.getElementsByClassName('nav-links')[0]

document.title="saindla"
toggle.addEventListener('click',()=>{
    nav.classList.toggle('active')
})
const clickBtn=document.getElementById('btn1')
clickBtn.addEventListener('click',()=>{
    nav.classList.remove('active')
})