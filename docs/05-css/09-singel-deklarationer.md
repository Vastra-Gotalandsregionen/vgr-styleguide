---
title: Singel-deklarationer
label: Singel-deklarationer
---

I de fall där ett css-block endast innehåller en deklaration är det ok att ej inkludera radbrytningar för läsbarhet och snabbare redigering. Block med flera deklarationer ska alltid delas upp med radbrytning.

Nyckeln här är felsökning, om tex en css-validator anger att du har ett syntaxfel på en rad. Med en enda deklaration går det ej att missa, men med flera är radbrytning ett måste för att kunna se felet.

**Singeldeklarationer**
```
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }
```

**Flera deklarationer**
```
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}
.icon { background-position: 0 0; }
.icon-home { background-position: 0 -20px; }
.icon-account { background-position: 0 -40px; }
``