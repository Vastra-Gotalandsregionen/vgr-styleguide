---
title: Exempel
label: Exempel
---

## Exempel på javascdipr-modul

`data-module="graph"` **/\* Syntax \*/**

graph.js **/\* Filnamn \*/**


**Kod i graph.js**
```
export default class Graph {
  constructor(element) {
  }
}
```

## Lägg till externa bibliotek för användning i projektet

Lägg till d3 till projektet
```
npm i d3 --save
```

## Externa bibliotek

### Exempel 1
Importera hela d3 paketet

```
import * as d3 from 'd3';
export default class DistortionGraph {
  constructor(element) {
      this.svg = d3.select(element)
  }
}
```

### Exempel 2
Importera bara "select" -funktionen från d3

```
import {select} from 'd3';
export default class DistortionGraph {
  constructor(element) {
      this.svg = select(element);
  }
}
```