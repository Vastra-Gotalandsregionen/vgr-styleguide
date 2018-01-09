---
title: Använd ej @import
label: Använd ej @import
---

Jämfört med `<link>` är `@import` långsammare, skapar extra sid-förfrågningar (requests) och kan skapa andra oförutsedda problem. Undvik det och uppmuntra ett annat tillvägagångssätt:

- Använd flera `<link>` element.
- Kompilera CSS med en pre-processor som tex SASS till en fil.
- Konkatenera CSS filer med funktioner i tex Rails, Jekyll eller Gulp.

För mer information, [läs denna artikel av Steve Souders](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/).

**`<!-- Använd link element -->`**

`<link rel="stylesheet" href="core.css">`

**`<!-- Undvik @imports -->`**

```
<style>
@import url("more.css");
</style>```
