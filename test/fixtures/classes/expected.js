"use strict";

var Foo = function Foo() {};

var Bar = (function (_Foo) {
  babelHelpers.inherits(Bar, _Foo);

  function Bar() {
    babelHelpers.get(Object.getPrototypeOf(Bar.prototype), "constructor", this).apply(this, arguments);
  }

  return Bar;
})(Foo);