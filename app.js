
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_items.forEach( (item) => {
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 300 ) {
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor= "transparent";
    }
});