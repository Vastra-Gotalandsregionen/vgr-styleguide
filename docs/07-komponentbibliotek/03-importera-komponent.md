---
title: Importera komponent
label: Importera komponent
---

_Ersätt `<vgr>` med komponentens id (namn)._

## Ladda ner komponent till projekt
```
npm install --save <vgr>
```

## Kopiera in komponent till projekt

Spacecraft innehåller funktionalitet för att kopiera in kompatibla komponenter till projekt, se "skapa komponent" för namngivning/struktur.

**Kör:**
```
gulp import --component <vgr>
```

**Glöm ej att importera css genom att lägga in:**

```
@import "components/<vgr>/<vgr>";
```

**i följande fil:**

```
./assets/scss/components/\_components.main.scss
```