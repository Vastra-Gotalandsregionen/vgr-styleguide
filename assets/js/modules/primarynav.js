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
        that.open(this)
      })
      this.toggleBtn[i].addEventListener('mouseout', function() {
        that.close(this)
      })
    }
  }

  open(btn) {
    if(btn.nextElementSibling) {
      let target = btn.nextElementSibling
      target.classList.add(this.toggleClassName)
    }
    btn.classList.add(this.toggleClassName)
    btn.setAttribute('aria-expanded', true)
    btn.setAttribute('aria-hidden', false)
  }

  close(btn) {
    if(btn.nextElementSibling) {
      let target = btn.nextElementSibling
      target.classList.remove(this.toggleClassName)
    }
    btn.classList.remove(this.toggleClassName)
    btn.setAttribute('aria-expanded', false)
    btn.setAttribute('aria-hidden', true)
  }
}



