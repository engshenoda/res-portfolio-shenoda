/*=============== SHOW MENU ===============*/
const navMenu = document.getElenemtById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/*=========== MENU SHOW =================*/
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

/*=========== MENU HIDDEN =================*/
if(navClose){
	navClose.addEventListener('click' , () =>{
		navMenu.classList.remove('show-menu')
	})
}





/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/