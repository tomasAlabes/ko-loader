"use strict";

module.exports = function(source) {
  this.cacheable();
  return source.replace('window["jQuery"]', 'require("jquery")');
};