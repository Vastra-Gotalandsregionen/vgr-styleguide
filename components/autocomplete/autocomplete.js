var ajax = new XMLHttpRequest();

ajax.open("GET", "https://restcountries.eu/rest/v1/lang/fr", true); // Dummy json

ajax.onload = function() {
    var list = JSON.parse(ajax.responseText).map(function(i) { return i.name; });
    Awesomplete.$$(".vgr-form-field__input--autocomplete").forEach(function (input) {
        new Awesomplete(input,{
            list: list,
            minChars: 2,
            maxItems: 5
        });
        window.addEventListener("awesomplete-selectcomplete", function(e){
          console.log("Submit");
        }, false);
    });
};
ajax.send();
