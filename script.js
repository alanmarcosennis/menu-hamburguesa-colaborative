window.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('show');
    });
      document.addEventListener('click', (event) => {
        const targetElement = event.target;
        const isMenuClicked = menu.contains(targetElement) || targetElement.classList.contains('menu-toggle');
        
        if (!isMenuClicked) {
          menu.classList.remove('show');
        }
      });
  });
  
