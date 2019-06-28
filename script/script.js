// Javascript
document.addEventListener('DOMContentLoaded',function(){
    var navbar = document.getElementById('navbar');
    var status = 'under 50';

    window.addEventListener('scroll',function(){
        if (window.pageYOffset > 50){
            if (status == 'under 50'){
                status = 'over 50';
                navbar.classList.add('bg');
            }
        }
        else if ( window.pageYOffset <= 50) {
            if ( status == 'over 50'){
                status = 'under 50';
                navbar.classList.remove('bg');
            }
        }
    })
},false);