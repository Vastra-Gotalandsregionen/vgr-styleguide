'use strict';

import register from './core';

register('toggle-button', function(element) {
  let menuId = element.getAttribute('aria-controls');
  if (!menuId) {
    return;
  }

  let menu = document.getElementById(menuId);
  if (!menu) {
    return;
  }

  element.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    let transitionTime = element.getAttribute('data-transition-time');
    if (transitionTime) {
      menu.classList.add('animating');
      setTimeout(() => menu.classList.remove('animating'), parseInt(transitionTime));
    }

    let expanded = menu.getAttribute('aria-expanded');
    if (expanded === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      element.removeAttribute('data-expanded');
    } else {
      menu.setAttribute('aria-expanded', 'true');
      element.setAttribute('data-expanded', '');
    }
  });
});
