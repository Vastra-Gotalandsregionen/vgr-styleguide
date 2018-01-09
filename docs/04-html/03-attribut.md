---
title: Attribut
label: Attribut
---

## Ordning för attribut

HTML-attribut ska komma i denna ordning för läsbarhet. Klasser är beskrivande återkommande komponenter så de kommer först. Id är unika och ska användas sparsamt (tex som bokmärken).

_Ordning:_

- class
- id, name
- data-\*
- src, for, type, href, value
- title, alt
- role, aria-\*

```
<a class="..." id="..." data-toggle="modal" href="/">Exempellänk</a>
<input class="form-control" type="text">
<img src="..." alt="...">
```

## Booleska attribut

Ett booleskt attribut är ett som ej behöver något värde. XHTML kräver att ett värde deklareras men HTML5 har inga sådana krav. Att ett booleskt attribut finns för ett element representerar det som sant medan frånvaron av attributet representerar falskt.

Om attributet av någon anledning måste innehålla ett värde, men det ej behövs för ditt ändamål, följ denna rekommendation översatt från [WhatWG](https://whatwg.org/):

**"… ge attributet en tom sträng som värde eller [...] attributets kanoniska namn utan några snedstreck före eller efter. Kortfattat, addera ej ett värde."**

För mer läsning, [WhatWG om booleska attribut](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes).

```
<input type="text" disabled>
<input type="checkbox" value="1" checked>
<select>
<option value="1" selected>1</option>
</select>
```