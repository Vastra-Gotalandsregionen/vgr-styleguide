'use strict';

import domready from '../domready';

let components = {};

function add(name, enhancer) {
  components[name] = enhancer;
}

function upgradeElement(element, component) {
  component(element);
}

function enhance() {
  let elements = document.querySelectorAll('[data-component]');
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let component = components[element.getAttribute('data-component')];
    if (component) {
      upgradeElement(element, component);
    }
  }
}

add.enhance = function() {
  domready(enhance);
};

export default add;
