export default class autocomplete {
  constructor(element) {
    let self = this

    this.inputElement = element.querySelector('input[type=search]')
    let type = this.inputElement.getAttribute('data-type')

    let config = {}

    if(type === 'ajax'){
      this.url = this.inputElement.getAttribute('data-url')
      if(!this.url) return FALSE

      config = {
        minChars: 2,
        list: []
      }

      this.autocomplete = new Awesomplete(self.inputElement, config)
      this.ajax()

    } else {
      let scriptElement = element.querySelector('script')
      let listData = JSON.parse(scriptElement.innerHTML)

      config = {
        minChars: 0,
        list: listData
      }

      this.autocomplete = new Awesomplete(self.inputElement, config)

      if(type === 'open'){
        this.open()
      }
    }
  }

  open() {
    let self = this
    this.inputElement.addEventListener('focus',function(){
      self.autocomplete.evaluate()
    })
  }

  ajax(){
    let self = this

    this.inputElement.addEventListener('input', function() {
      if(this.value !== ''){
        let xhr = new XMLHttpRequest()
        xhr.open('GET', self.url + this.value)
        xhr.onreadystatechange = function() {
          if (xhr.readyState > 3 && xhr.status == 200) {
            self.ajaxDisplayresults(JSON.parse(xhr.response))
          }
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        xhr.send()
      }
    })
  }

  ajaxDisplayresults(list) {
    let self = this
    let newlist = []

    list.forEach(function(obj) {
      newlist.push(self.listItemHtml(obj))
    })

    this.autocomplete.list = newlist
  }

  listItemHtml(obj) {
    return '<div class="vgr-autocomplete__item"><p class="vgr-autocomplete__headline">' +
    obj + '<span class="vgr-autocomplete__id" title="VGR-id">'+
    obj + '</span></p><ul class="vgr-autocomplete__inline-list"><li class="vgr-autocomplete__inline-list-item"><svg class="vgr-autocomplete__inline-list-icon" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Beställar-ID">  <g fill="none" fill-rule="evenodd"><circle fill="#FFC704" cx="7.5" cy="7.5" r="7.5"/><path d="M6.575 6.833H8.17c.282 0 .512-.065.693-.196.18-.13.27-.343.27-.637 0-.163-.03-.297-.09-.402-.06-.105-.14-.186-.24-.245-.1-.06-.216-.1-.346-.123-.13-.022-.266-.034-.407-.034H6.575v1.637zM5 4h3.37c.342 0 .653.03.934.088.28.06.522.155.723.29.2.133.356.312.466.534.11.222.166.496.166.823 0 .353-.086.647-.25.883-.164.235-.406.428-.727.578.44.124.77.342.988.652.218.31.327.685.327 1.123 0 .357-.07.66-.21.92-.14.258-.33.47-.57.633-.236.164-.507.285-.81.363-.306.08-.618.118-.94.118H5V4zm1.575 5.804H8.26c.155 0 .302-.015.442-.044.14-.03.265-.08.372-.147.107-.07.192-.162.255-.28.06-.117.092-.268.092-.45 0-.36-.104-.617-.31-.77-.21-.154-.483-.23-.824-.23H6.575v1.92z" fill="#000"/>  </g></svg><span class="vgr-autocomplete__inline-list-title">Beställar-id:</span> <span title="Beställar-id">' +
    obj + '</span></li><li class="vgr-autocomplete__inline-list-item"><svg class="vgr-autocomplete__inline-list-icon" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Ansvarsnummer">  <g fill="none" fill-rule="evenodd"><circle fill="#006CB6" cx="7.5" cy="7.5" r="7.5"/><path d="M6.557 8.294h1.856l-.903-2.57h-.02l-.933 2.57zM6.707 4h1.615L11 11H9.365l-.54-1.56h-2.68L5.585 11H4l2.708-7z" fill="#FFF"/>  </g></svg><span class="vgr-autocomplete__inline-list-title">Ansvarsnummer:</span> <span title="Ansvarsnummer">' +
    obj + '</span></li><li class="vgr-autocomplete__inline-list-item"><svg class="vgr-autocomplete__inline-list-icon" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="i-Nummer">  <g fill="none" fill-rule="evenodd"><circle fill="#FF6F19" cx="7.5" cy="7.5" r="7.5"/><path fill="#FFF" d="M7 3v9h2V3"/>  </g></svg><span class="vgr-autocomplete__inline-list-title">I-nummer</span> <span title="I-nummer">i90357</span></li></ul></div>'
  }
}
