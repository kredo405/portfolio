// Меню
 let btnTogler = document.querySelector('.navbar__toggler'),
     colapseNav = document.querySelector('.collapse__nav'),
     gamburger = document.querySelector('.gamburger');   
     
     function showAndHideMenu(e) {

        if(getComputedStyle(colapseNav).display == 'none') {
            colapseNav.style.display = 'block';
            gamburger.setAttribute('src', '../icons/delete.png');

        } else {
            colapseNav.style.display = 'none';
            gamburger.setAttribute('src', '../icons/menu.png');
        }
     }
    btnTogler.addEventListener('click', (e) => {
        showAndHideMenu(e);
    }); 





