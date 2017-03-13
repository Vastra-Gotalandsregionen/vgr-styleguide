## Installation

## CSS architecture

## Sass

## Variables


## Mixins 

List of predefined mixins.

### Clearfix

Make an element visually hidden, but accessible to assistive technology. See [http://blog.teamtreehouse.com/a-better-clearfix-with-sass](http://blog.teamtreehouse.com/a-better-clearfix-with-sass) for more information.

#### Usage

Include in your CSS using `@extend .clearfix;` or use in your HTML using the class `clearfix`.

### Visually Hidden and Visually-hidden Focusable

Make an element visually hidden, but accessible to assistive technology. See [http://snook.ca/archives/html_and_css/hiding-content-for-accessibility](http://snook.ca/archives/html_and_css/hiding-content-for-accessibility) for more information.

#### Usage

Include in your CSS using `@extend .visually-hidden;` or use in your HTML using the class `visually-hidden`.

Include in your CSS using `@extend .visually-hidden--focusable;` or use in your HTML using the class `visually-hidden--focusable`.

### Print

Include `@media print` to target style for printers.

## CSS reset

For improved cross-browser rendering, we use <a href="http://necolas.github.io/normalize.css/">Normalize v4.0.0s</a>, a project by <a href="https://twitter.com/necolas">Nicolas Gallagher</a> and <a href="https://twitter.com/jon_neal">Jonathan Neal</a>. Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements.

Normalize.css contain styles that apply globally to all native HTML elements.

## Customization and theming

## Where things live

## Supported browsers
The styleguide support the latest, stable releases of all major browsers and platforms.

### Desktop browsers

|         | Chrome    | Firefox   | Internet Explorer | Edge      | Opera     | Safari    |
|---------|-----------|-----------|-------------------|-----------|-----------|-----------|
| Mac     | Supported | Supported | Supported         | Supported | Supported | Supported |
| Windows | Supported | Supported | Supported         | Supported | Supported | Supported |


### Mobile devices

## Accessibility

Accessibility tips to help you deliver delightful experiences to all users.

### Hiding and showing content

There will be cases in which you will need to selectively "show" and "hide" content by either removing it from the visual flow or preventing screen readers from reading it. We have settled on the following conventions for each use case:

| Visual browsers | Screen readers | Solution          |
|-----------------|----------------|-------------------|
| _hide_          | _hide_         | Add the boolean [`hidden` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) attribute to dynamically hide content from all users. [Remove the attribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute) to show it again. |
| *show*          | _hide_         | Use the [`aria-hidden="true"`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden)</a> attribute to "hide" content from screen readers while keeping it visually perceivable. |
| _hide_          | *show*         | Use the `vgr-visually-hidden` class to show content to screen readers only. This removes the content from the visual flow of the document but retains its legibility by screen readers. |


## Contribution guidelines
