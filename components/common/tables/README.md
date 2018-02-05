Text from [The U.S. Web Design Standards](https://standards.usa.gov/components/alerts/)

---

## Accessibility

* Simple tables can have two levels of headers. Each header cell should have `scope="col"` or `scope="row"`.
* Complex tables are tables with more than two levels of headers. Each header should be given a unique `id` and each data cell should have a `headers` attribute with each related header cell’s `id` listed.
* When adding a title to a table, include it in a `<caption>` tag inside of the `<table>` element.

## Usability

### When to use

* When you need tabular information, such as statistical data.

### When to consider something else

* Depending on the type of content, consider using other presentation formats such as definition lists or hierarchical lists.

### Guidance

* Tables are great at displaying tabular data. Minimal visual styling helps surface this information more easily.