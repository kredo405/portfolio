let programmCourse = document.querySelectorAll('.tehnology__menu-list');
let programTehnology = document.querySelector('.tehnology_programm__colapse');
let programmUl = programTehnology.querySelectorAll('ul');


//  Акардион
        programmCourse.forEach((el) => {
            el.addEventListener('click', (e) => {
                let elem = e.target.parentElement.nextElementSibling;
                let arrayImg = el.querySelector('img');
                if(getComputedStyle(elem).display === 'none') {
                    elem.style.display = 'block';
                    arrayImg.setAttribute('src', '../icons/close.png');
                } else {
                    elem.style.display = 'none';
                    arrayImg.setAttribute('src', '../icons/gamburger.png');
                }
            }); 
        });
  
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





