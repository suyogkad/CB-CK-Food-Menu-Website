/*
Author: Suyog Kadariya
Copyright (c) 2023
*/

function openMessenger() {
  window.open("https://m.me/classicburgerandchickenking", "_blank");
}

document.addEventListener('DOMContentLoaded', function () {
    const menuTabs = document.querySelectorAll('.menu-data');
    const menuItems = document.querySelectorAll('.menu-conten-item');
  
    // Show the content of the first category when the page opens
    const firstTab = menuTabs[0];
    const firstFilter = firstTab.getAttribute('data-filter');
    firstTab.classList.add('active');
  
    menuItems.forEach(item => {
      const groups = item.getAttribute('data-groups');
  
      if (groups.includes(firstFilter) || firstFilter === 'all') {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  
    // Event listener for menu tabs
    menuTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        const filter = tab.getAttribute('data-filter');
  
        menuTabs.forEach(t => {
          t.classList.remove('active');
        });
  
        tab.classList.add('active');
  
        menuItems.forEach(item => {
          const groups = item.getAttribute('data-groups');
  
          if (groups.includes(filter) || filter === 'all') {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });

   
  
  });
  