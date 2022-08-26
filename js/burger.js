const menuBody = document.querySelector('.menu_body');
const menu = document.querySelector('.menu');

menu.addEventListener('click', function (){

    
    if(menuBody.classList.contains('menu_body_activation')){
        menuBody.classList.remove('menu_body_activation');
    }else{
        menuBody.classList.add('menu_body_activation');
    }

})