---
title: Skapa moduler
label: Skapa moduler
---

För en utökad syntax används [Babel](https://babeljs.io/) som kompilerare för JavaScript (JS). Konkatenering av JavaScript sker med [Webpack](https://webpack.js.org/), beskrivningarna nedan bygger på Webpacks metoder och struktur.

Implementera javascript-moduler i din html som attribut med följande syntax:

```
data-module="<modulnamn>"
```

Skapa en fil i assets/js/modules med namn <modulnamn>.js och lägg till följande kod i filen:
```
export default class <modulnamn-som-camel-case> {
  constructor(element) {
  }
}
```
