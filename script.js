const hamburger=document.querySelector('.hamburger');
const nav= document.querySelector('nav ul');
hamburger.addEventListener('click',function(){
    this.classList.toggle('is-active')
    nav.classList.toggle('slide')
})




