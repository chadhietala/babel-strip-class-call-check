function stripClassCallCheck(babel) {
  return new babel.Plugin('strip-class-call-check', {
    visitor: {
      ExpressionStatement: function(node, path) {
        if (node.expression.type === 'CallExpression' &&
            node.expression.callee &&
            node.expression.callee.type === 'MemberExpression' &&
            node.expression.callee.object.name === 'babelHelpers' &&
            node.expression.callee.property.name === 'classCallCheck') {

          path.body = path.body.filter(function(item) {
            return item !== node;
          });
        }
      }
    }
  });
}

module.exports = stripClassCallCheck;
