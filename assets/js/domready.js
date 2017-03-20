'use strict';

function onready(func) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    func();
  } else {
    document.addEventListener('DOMContentLoaded', func, false);
  }
}

onready(() => {
  onready.ready = true;
});

export default onready;
