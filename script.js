const hamburger=document.querySelector('.hamburger');
const nav= document.querySelector('nav ul');
hamburger.addEventListener('click',function(){
    this.classList.toggle('is-active')
    nav.classList.toggle('slide')
})


function dropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  
  window.onclick = (event)=> {
    if (!event.target.matches('.dropbutton')) {
        const dropdowns = document.querySelector("dropdown-content");
        let i=0;
        while (i < dropdowns.length) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            i++;
        }
    }
  }