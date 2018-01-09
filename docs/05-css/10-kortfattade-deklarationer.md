---
title: Kortfattade deklarationer
label: Kortfattade deklarationer
---

Sträva efter att begränsa användandet av kortfattade deklarationer där flera tillgängliga värden kan deklareras. Hos följande egenskaper är kortfattade deklarationer vanligen överanvänt:

- padding
- margin
- font
- background
- border
- border-radius

Vanligen behöver inte alla värden som en kortfattad deklaration representerar definieras. Exempelvis, html-headings har endast margin för top och bottom, så om nödvändigt, skriv endast över dessa två värden. Överdrivet användande av kortfattade deklarationer leder ofta till slarvigare kod med onödiga överskrivningar och oanade sidoeffekter.

[Mozilla Developer Network](https://developer.mozilla.org/sv-SE/) har publicerat en relevant [artikel angående kortfattade deklarationer](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties).

**Dåligt exempel**
```
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}
```

**Bra exempel**
```
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
```