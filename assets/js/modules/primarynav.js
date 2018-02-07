export default class PrimaryNav {
  constructor(element) {

    let that = this

    let toggleClassName = element.getAttribute('data-toggle-class')
    let toggleBtnClassName = element.getAttribute('data-trigger')

    this.toggleClassName = toggleClassName
    this.toggleBtn = element.getElementsByClassName(toggleBtnClassName)

    if (!this.toggleClassName || !this.toggleBtn) { return }

    for (var i = 0; i < this.toggleBtn.length; i++) {
      this.toggleBtn[i].addEventListener('mouseover', function() {
        that.toggle(this)
      })
    }
  }

  toggle(btn) {

    let target = btn.nextElementSibling
    console.log(target)

    if( !target.classList.contains(this.toggleClassName) ) {

      if(link = this.previousElementSibling || link == 'A') {
        link.classList.add(toggleClassName)
      }
      target.classList.add(this.toggleClassName)
      btn.classList.add(this.toggleClassName)
      btn.removeAttribute('aria-hidden')
    } else {

      if(this.link = this.previousElementSibling || this.link == 'A') {
        this.link.classList.remove(this.toggleClassName)
      }
      target.classList.remove(this.toggleClassName)
      btn.classList.remove(this.toggleClassName)
      btn.setAttribute('aria-hidden', true)
    }
  }
}



