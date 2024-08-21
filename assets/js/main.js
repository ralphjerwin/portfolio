import AOS from 'aos';      
AOS.init();  

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
