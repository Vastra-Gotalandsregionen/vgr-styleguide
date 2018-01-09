---
title: Syntax
label: Syntax
---

- Använd två space/blanksteg som indentering, det enda sättet att garantera att koden renderas lika oavsett miljö.
- Använd en selektor per rad då selektorer grupperas
- Ett space/blanksteg - mellan selector och öppnande klammerparentes för läsbarhet
- Stängande klammerparentes på ny rad
- Ett space/blanksteg efter kolon för varje deklaration
- Ny rad för varje deklaration för mer precisa felrapporter
- Avsluta alla deklarationer med semikolon
- Kommaseparerade värden inkluderar ett space/blanksteg efter varje komma (tex box-shadow)
- Inkludera ej space/blanksteg efter komma för värden i rgb(), rgba(), hsl(), hsla(), eller rect(). Detta skiljer multipla färg-värden från multipla kommaseparerade värden nämnda ovan
- Inled ej med 0 i deklarerat värde eller färgparametrar (tex .5 istället för 0.5)
- Använd gemener för hex-värden, bokstavsformen för gemener tenderar att vara mer utstickande och enklare att finna för ögat
- Använd korta hex-värden om möligt (tex #000, inte #000000)
- Citationstecken för attributs värde i selektorer (tex [type = "checkbox"])
- Om möjligt, undvik att ange enheter för nollvärden (tex margin: 0; inte margin: 0px;)

**Dålig CSS**
```
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  color:#FFFFFF;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}
```

**Bra CSS**
```
.selector,
.selector-secondary,
.selector[type="text"] {
  margin-bottom: 15px;
  padding: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
  color: #fff;
}
```