// export default class toggleButton {
//     constructor(element) {

//         let menuId = element.getAttribute('aria-controls');
//         if (!menuId) {
//             return;
//         }

//         let menu = document.getElementById(menuId);
//         if (!menu) {
//             return;
//         }

//         element.addEventListener('click', (e) => {
//             e.preventDefault();
//             e.stopImmediatePropagation();

//             let transitionTime = element.getAttribute('data-transition-time');
//             if (transitionTime) {
//                 menu.classList.add('animating');
//                 setTimeout(() => menu.classList.remove('animating'), parseInt(transitionTime));
//             }

//             let expanded = menu.getAttribute('aria-expanded');
//             if (expanded === 'true') {
//                 menu.setAttribute('aria-expanded', 'false');
//                 element.removeAttribute('data-expanded');
//             } else {
//                 menu.setAttribute('aria-expanded', 'true');
//                 element.setAttribute('data-expanded', '');
//             }
//         });
//     }
// }

/*

MODIFIED VERSION

How to use:
- Add the two following attributes to the element/button responsible for the toggling: 

    1) aria-controls="CLASS_NAME_OF_ELEMENT_WITH_THE_HIDDEN_CONTENT"
    2) data-module="toggle"

- Add the following styling to the element with the hidden content:

    .CLASS_NAME_OF_ELEMENT_WITH_THE_HIDDEN_CONTENT {
        display: none;

        [aria-expanded=true] {
          display: block;
        }

        [aria-expanded=false] {
          display: none;
        }
    }

- Done!

*/
export default class toggle {
    constructor(element) {
        // Get the name of the element/container to be shown or hidden
        let containerID = element.getAttribute('aria-controls');

        // Find the actual element with that name based on ID
        let container = document.getElementById(containerID);

        if(!container) {
            // No element with that ID was found. Look for class instead
            container = element.parentNode.getElementsByClassName(containerID);
            container = container ? container[0] : null;
        }

        if(container) {
            this.element = element;
            this.element.parentClass = this;
            this.container = container;
            this.addEvents();
        }
        else {
            throw new NoElementException('Element must be available in DOM');
        }
    }

    addEvents()
    {
        this.element.addEventListener('click', this.onClick);
    }

    removeEvents()
    {
        this.element.removeEventListener('click', this.onClick);   
    }

    onClick(e)
    {
        if(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }

        let element = this.parentClass.element;
        let container = this.parentClass.container;

        let transitionTime = element.getAttribute('data-transition-time');
        if (transitionTime) {
            container.classList.add('animating');
            setTimeout(() => container.classList.remove('animating'), parseInt(transitionTime));
        }

        let expanded = container.getAttribute('aria-expanded');
        if (expanded === 'true') {
            container.setAttribute('aria-expanded', 'false');
            element.removeAttribute('data-expanded');
        } else {
            container.setAttribute('aria-expanded', 'true');
            element.setAttribute('data-expanded', '');
        }
    }

    kill()
    {
        removeEvents();
    }
}
