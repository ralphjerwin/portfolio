import AOS from 'aos';      
AOS.init();  
import Splide from '@splidejs/splide';



document.addEventListener('DOMContentLoaded', function(event) {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.mobile-nav-list');
    const listItems = document.querySelectorAll('.list-hide');
    const Close = document.querySelector('.close');
    const Bar = document.querySelector('bar');
    
    event.preventDefault();
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
        Bar.style.display ='none';
        Close.style.display ='block';
    });
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            
            navList.style.display = 'none';
        });
    });

    const splide = new Splide('.splide', {
        type: 'slider'
    })
    splide.mount();
    

});


