const body = document.querySelector('body');
//NAVBAR
const navbarSite = document.querySelector('.navbar-site-header');
const navbarMenu = document.querySelector('.navbar-menu-header');
//TOGGLE BUTTON
const toggleButton = document.querySelector('.navbar-toggler');
//INTRO
const intro = document.querySelector('.intro');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = intro.querySelector('h1');

//SCROLLMAGIC
window.addEventListener('scroll', function(e) {
    if(window.scrollY > navbarSite.clientHeight){
        navbarMenu.classList.add("fixed-top");
        body.setAttribute('style', 'padding-top:TopPADDINGpx;'.replace('TopPADDING', navbarMenu.clientHeight))
    }else{
        navbarMenu.classList.remove("fixed-top");
        body.setAttribute('style', 'padding-top:0px;')
    }
  });


//TOGGLE BUTTON Animation event Listener
let menuOpen = false;

toggleButton.addEventListener('click', ()=>{
    if(!menuOpen){
        toggleButton.classList.add('open');
        menuOpen = true;
    } else {
        toggleButton.classList.remove('open');
        menuOpen = false;
    }
});

window.setTimeout(function() {
    toggleButton.setAttribute('style', 'visibility: visible;');
}, 200);


