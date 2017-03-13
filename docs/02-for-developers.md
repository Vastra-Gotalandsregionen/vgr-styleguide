## Installation

## Tools

## EditorConfig

EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. Download the plugin at [http://editorconfig.org/](http://editorconfig.org/).

### Stylelint

* Use one discrete selector per line in multi-selector rulesets.
* Include a single space before the opening brace of a ruleset.
* Include one declaration per line in a declaration block.
* Use one level of indentation for each declaration.
* Include a single space after the colon of a declaration.
* Use lowercase and shorthand hex values, e.g., #aaa.
* Use single or double quotes consistently. Preference is for double quotes, e.g., content: "".
* Quote attribute values in selectors, e.g., input[type="checkbox"].
* Where allowed, avoid specifying units for zero-values, e.g., margin: 0.
* Include a space after each comma in comma-separated property or function values.
* Include a semi-colon at the end of the last declaration in a declaration block.
* Place the closing brace of a ruleset in the same column as the first character of the ruleset.
* Separate each ruleset by a blank line.

#### Editor plugins

- [linter-stylelint](https://github.com/AtomLinter/linter-stylelint) - an Atom Linter plugin for Stylelint.
- [SublimeLinter-contrib-stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint) - a Sublime Text plugin for Stylelint.
- [vscode-stylelint](https://github.com/shinnn/vscode-stylelint) - a Visual Studio Code extension for Stylelint.

`stylelint-config.json` is our default [Stylelint](http://stylelint.io/) config. If the project setup needs to modify these settings you can override rules in the `.stylelintrc` config.

For example, changing indentation to four spaces and turning off the number-leading-zero rule:

```
{
  "extends": "./stylelint-config.json",
  "rules": {
    "indentation": 4,
    "number-leading-zero": null,
  }
}
```

Read more about [extending rules](http://stylelint.io/user-guide/configuration/#extends).

#### Temporary turning off rules

Rules can be temporarily turned off by using special comments in your CSS. See [Configuration rules](http://stylelint.io/user-guide/configuration/#turning-rules-on-and-off) for a list of commands.

### CSScomb

CSScomb is a coding style formatter for CSS. The main feature is sorting properties in a specific order. Learn more at
[http://csscomb.com/](http://csscomb.com/).


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
