/* Color.js -- Transforms raw style information into a color object
 *
 * Copyright (C) 2016 Michael Seibt
 *
 * With contributions from:
 *  - Chris Tarczon (@tarczonator)
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

'use strict';

var Entity = require('./Entity');

var FontSize = function(raw) {
  // Call parent constructor
  Entity.call(this, raw);

  // Set color-specific entity properties
  this.type = "Color";
  this.fillable = ['fontSize', 'section', 'description', 'deprecated'];

  // Validate the raw input data for common mistakes
  if (!this.validate()) return {};

  // Single-line annotation block means @color is the description.
  if (!raw.annotations.description) {
    raw.annotations.description = raw.annotations.color;
  }

  return {
    name: raw.descriptor,
    type: 'fontSize',
    section: 'FontSizes > ' + this.getSection(),
    description: raw.annotations.description,
    deprecated: raw.annotations.deprecated,
    value: raw.element.value.replace(/ *!default/, '')
  };

};

FontSize.prototype = Object.create(Entity.prototype);

module.exports = FontSize;
