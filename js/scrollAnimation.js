const animation = document.querySelectorAll('.animation');

addEventListener('scroll', animationScroll);

    function animationScroll(){

        animation.forEach(function(className){

            const classNameTop = offset(className).top;
            const windowScrollTop = window.pageYOffset;

            if((classNameTop - windowScrollTop) < 700 ){

                className.classList.add('_activation');

            }

        })

    }

animationScroll();

    

function offset(element){

    const rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    return { top:rect.top + scrollTop, left: rect.left + scrollLeft };

}

