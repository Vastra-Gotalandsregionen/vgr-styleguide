---
title: Ordning för deklarationer
label: Ordning för deklarationer
---

Relaterade deklarationer ska kategoriseras och grupperas i följande ordning:

1. Positionering
2. Box modell/beteende
3. Visuellt
4. Typografi
5. Blandat/övrigt

Positionering kommer först eftersom det kan ta ett element ur dokumentets normala flöde och skriva över stil relaterad till boxmodell/beteende. Boxmodell/beteende kommer härnäst då det dikterar komponentens dimensioner och placering.

Allt annat äger rum inuti komponenten eller utan att påverka de föregående två sektionerna, och sålunda kommer de sist.

```
.deklaration-ordning {
  /* Positionering */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-modell/beteende */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Visuellt */
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-color: #f5f5f5;

  /* Typografi */
  color: #333;
  text-align: center;
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;

  /* Blandat/övrigt */
  opacity: 1;
}
```
