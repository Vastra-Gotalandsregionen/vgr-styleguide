---
title: Inkludera CSS och JavaScript
label: Inkludera CSS och JavaScript
---

Vanligtvis behövs inte typ specificeras då css och JavaScript inkluderas eftersom "text/css" och "text/javascript" är deras respektive standard.

_Från HTML5 specifikation om att inkludera:_

- [Som link-element](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
- [Som style-element](http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
- [Som script-element](http://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)

```
<!-- Extern CSS -->
<link rel="stylesheet" href="main.css">
```

```
<!-- CSS i dokument -->
<style>
/ ... /
</style>
```

```
<!-- JavaScript -->
<script src="main.js"></script>
```
