const assert = require('assert');

class LexicallyBound {
  getFunction() {
    return () => {
      return this;
    }
  }

  getArgumentsFunction() {
    return () => arguments
  }
}

describe('arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>` ', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    assert.strictEqual(fn(), bound);
  });

  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    var fn = bound.getFunction();
    var anotherObj = fn();
    var expected = anotherObj;
    assert.strictEqual(fn.call(anotherObj), expected);
  });

  it('`arguments` doesnt work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    assert.equal(fn(1, 2).length, 0);
  });

});
