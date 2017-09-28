import Awesomplete from 'awesomplete'

export default class quicksearch {
  constructor(element) {
    this.inputElement = element.querySelector('input[type=search]')

    this.templateElement = element.querySelector('div[data-id="template"]')
    if(!this.templateElement) return false;
    this.template = this.templateElement.innerHTML;

    this.url = this.inputElement.getAttribute('data-url')
    if(!this.url) return false

    let config = {
      minChars: 2,
      list: [],
      item: this.filter,
    }

    this.error = false

    this.autocomplete = new Awesomplete(this.inputElement, config)
    this.ajax()
  }

  ajax(){
    let self = this

    this.inputElement.addEventListener('input', function() {
      if(this.value !== '' && this.value.length > 2){
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

    this.inputElement.addEventListener('awesomplete-select', function(event) {
      if(self.error === false && event.text !== undefined && event.text.value !== undefined){
        window.location = event.text.value
      }
      self.autocomplete.list = []
      event.preventDefault();
    })
  }

  ajaxDisplayresults(list) {
    let self = this

    let newlist = []

    if(!list.error){
      list.forEach(function(obj) {
        newlist.push(self.listItemHtml(obj))
      })
      self.error = false
    }
    else {
      newlist.push(this.inputElement.value + ' - ' +list.error)
      self.error = true
    }

    this.autocomplete.list = newlist
  }

  listItemHtml(obj) {
    let html = this.template;

    Object.keys(obj.data).forEach(function (k) {
      html = html.replace('#' + k + '#', obj.data[k])
    })

    return {
      'label': html,
      'value': obj.url
    }
  }

  filter(text, input){
    let search = "(" + Awesomplete.$.regExpEscape(input.trim()) + ")(?!([^<]+)?>)";
    let html = input.trim() === "" ? text : text.replace(RegExp(search, "gi"), "<mark>$&</mark>");
    return Awesomplete.$.create("li", {
      innerHTML: html,
      "aria-selected": "false"
    });
  }
}
