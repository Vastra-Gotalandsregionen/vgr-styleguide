---
title: Skapa komponent
label: Skapa komponent
---

_Följande är föreslagen struktur och design för komponenter._

## Root

Placera index.js i roten för ditt projekt med följande kod: `module.exports = __dirname;` Detta gör att import-task i Spacecraft hittar din komponents filer. Att skapa changelog-, licens- och readme-filer rekommenderas för varje komponent och placeras även de i roten.

### Docs

Dokumentation för komponenten placeras här, förslagsvis som markdown (.md).

### Ikoner

Om komponenten innehåller svg-ikoner placeras de här, annars kan mappen uteslutas helt.

### Img

Bilder (.jpg, .png, .gif) placeras här. Tänk på att ge riktlinjer och information i dokumentationen för format, ratio, komprimering etc. eller hur ev platshållare ersätts. Komponenter som inte använder några bilder behöver ej innehålla mappen.

### JS

Här placeras eventuell JavaScript för komponenten, i Spacecraft kan du (och föreslås) isolera komponentens JS genom att göra en modul som [beskrivs här](https://github.com/pedric/spacecraft-starterkit#javascript).

## View

Här ska HTML (Nunjucks), CSS (SCSS), Config (JSON) och Readme (md) sparas. Nunjucks är standard i VGR stilguide men Twig, Handlebars etc kan användas i Spacecraft. Detta ställer du in i konfigurationsfilen för ditt projekt.
