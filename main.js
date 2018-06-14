var stt = document.querySelector('.scroll-to-top');
stt.addEventListener('click', function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
