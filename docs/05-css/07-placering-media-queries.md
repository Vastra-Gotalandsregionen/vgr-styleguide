---
title: Placering av Media queries
label: Placering av Media queries
---

Placera media queries så nära de relevanta css-blocken som möjligt. Bunta inte ihop dem i en separat stilmall eller i slutet av dokumentet, det gör css-koden svårare att underhålla och arbeta med i allmänhet.

**Placering av @media queries**
```
.element { ... }
.element-avatar { ... }
.element-selected { ... }
@media (min-width: 480px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```
