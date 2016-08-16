# Strip Class Call Check

__Notice: This currently works only with Babel 5.x.x__

Babel normally generates a runtime method called `classCallCheck` that is responsible for checking to see if you are calling `super` in JavaScript classes. This is a runtime check meant for development time and this cost should not be incurred in production. This plugin is intended to be used for production and strips these checks.

### Usage

```
var stripClassCallCheck = require('babel-strip-class-call-check');

babel.transform('class Foo{} class Bar extends Foo {}', {
  externalHelpers: true,
  plugins: [ { transformer: stripClassCallCheck, position: 'after' }]
})
```
