---
title: Grundläggande
label: Grundläggande
---


## Praxis

Sträva efter att upprätthålla standard och semantik för HTML. Använd minsta möjliga markup och gör det så lättarbetat som möjligt. Anta följande exempel:

```
<!-- Öveflödigt -->
<span class="avatar">
<img src="...">
</span>
```

```
<!-- Bättre -->
<img class="avatar" src="...">
```

## HTML5 doctype

Ange dokumentets standard och försäkra mer konsekvent återgivning i olika webbläsare med denna enkla doctype-tag i början av varje HTML-sida.

```
<!DOCTYPE html>
```

## Syntax

- Använd två blanksteg (space) som tab-storlek för indentering av kod
- Omfamnade (nested) element ska indenteras en nivå (två blanksteg)
- Använd alltid dubbla citationstecken för attribut, aldrig singel
- Inkludera aldrig stängande snedstreck (trailing slash) för självstängande taggar (tex skriv `<br>` inte `<br />`)
- Utelämna inte frivilliga stängande taggar (tex `</li>` eller `</body>`)

## Språk-attribut (lang)

_Översatt från_ [_W3C&#39;s_](https://www.w3.org/) _HTML5 specifikation:_
"Utvecklare uppmuntras att specificera ett språk-attribut för rotens html-element som anger dokumentets språk. Detta hjälper skärmläsare att avgöra vilket uttal som ska användas, översättningsverktyg att bestämma vilka regler som ska användas, osv."

Läs mer om språk-attributet i [specifikationen](http://w3c.github.io/html/semantics.html#the-html-element) och [klicka in på Sitepoint](https://www.sitepoint.com/iso-2-letter-language-codes/) för en lista över tillgängliga språk-koder.

**`<!-- Språk-attribut med språk-kod för svenska-->`**

```
<html lang="sv-SE">
<!-- ... -->
</html>
```

## Internet Explorer (IE) kompabilitetsläge

Internet Explorer har support att använda meta-tag för kompabilitetsläge vilket möjliggör att specificera med vilken version av IE som sidan ska renderas. Om ej omständigheterna gör att annat krävs rekommenderas senaste version med Edge Mode.

För mer information, läs denna [artikel på Stack Overflow](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do).

```
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

## Teckenkodning

Försäkra rätt rendering av innehåll och deklarera teckenkodning. Genom att göra det behövs inte [character entities](https://dev.w3.org/html5/html-author/charref) i html, förutsatt att dess teckenkodning matchar dokumentets (vanligtvis [UTF-8](https://www.w3.org/International/questions/qa-html-encoding-declarations)).

```
<head>
<meta charset="UTF-8">
</head>
```
