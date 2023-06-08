const menu = document.querySelector('nav ul')
const button = document.querySelector('nav .button')
const buttonMenu = document.querySelector('.button-menu')
const cotentMobile = document.querySelector('.cotent-mobile')
const imgLogo = document.querySelector('.logo')
const imgTop = document.querySelector('.blur-top')
const imgBottom = document.querySelector('.blur-bottom')
const modal = document.querySelector('.modal')

document.addEventListener('DOMContentLoaded', function() { // DOMContent executa depois que o html é carregado
  function checkScreenWidth() {
    if (window.innerWidth <= 425) {
      buttonMenu.classList.remove('hidden')
      menu.classList.add('hidden');
      button.classList.add('hidden');
      imgTop.classList.add('hidden');
      cotentMobile.classList.remove('hidden')
      imgLogo.src = './assets/logo-mobile.svg'
      imgBottom.src = './assets/blur-mobile.png'
  
    } else {
      menu.classList.remove('hidden');
      button.classList.remove('hidden');
      imgTop.classList.remove('hidden');
      buttonMenu.classList.add('hidden')
      button.classList.remove('hidden');
      cotentMobile.classList.add('hidden')
      imgLogo.src = './assets/logo-desktop.svg'
      imgBottom.src = './assets/blur-1.png'
    }
  }
  
  window.addEventListener('resize', checkScreenWidth);
  checkScreenWidth();
});



function openModal() {
    if(modal.classList.contains('hidden')) {
      
      modal.classList.remove('hidden')
      modal.classList.add('modal-animation');
      buttonMenu.innerHTML = '<img src="./assets/menu-buguer-close.svg" alt="">';
    } else {
      modal.classList.add('modal-animation-close');
      buttonMenu.innerHTML = '<img src="./assets/menu-buguer-open.svg" alt="">';
     

      setTimeout(function() {
        modal.classList.add('hidden');
        modal.classList.remove('modal-animation-close');
      }, 500); // Tempo correspondente à duração da animação de fechamento (0.5s = 500ms)
  
    }
    
}