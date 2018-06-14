 // SCROLL TO TOP

 var stt = document.querySelector('.scroll-to-top');
 stt.addEventListener('click', function() {
   window.scroll({
     top: 0,
     left: 0,
     behavior: 'smooth'
   });
 })

 // NAV Bar
 var headerNav = document.querySelector('.nav-scroll');

 document.addEventListener('wheel', function(event) {
   if (event.deltaY > 0) {
     headerNav.style.marginTop = "-140px";
   } else if (event.deltaY < 0) {
     headerNav.style.marginTop = "";
   }
 });

 // MENU Mobile
 var iconMenu = document.querySelector('.mobile');
 var mainNav = document.querySelector('#mainav ul');

 iconMenu.addEventListener('click', function() {
   if (mainNav.style.display === "none") {
     mainNav.style = "display : block";
   } else {
     mainNav.style = "display : none";
   }
 });
