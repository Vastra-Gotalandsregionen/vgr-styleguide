---
title: Nesting i Sass
label: Nesting i Sass
---

Undvik onödig nesting, överväg endast om anledning finns att isolera/knyta stilar till en parent.

**Med nesting**
```
.table > thead > tr > th { … }
.table > thead > tr > td { … }
```

**Utan nesting**
```
.table > thead > tr {
  th { … }
  td { … }
}
```