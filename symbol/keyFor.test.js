const assert = require('assert');

describe('`Symbol.keyFor()` gets the symbol key for a given symbol', function() {
  const sym = Symbol.for('foo');

  it('pass the symbol to `keyFor()` and you get its key', function() {
    const key = Symbol.keyFor(sym);
    assert.equal(key, 'foo');
  });

  it('local symbols are not in the runtime-wide registry', function() {
    // hint: `Symbol()` creates a local symbol!
    const localSymbol = Symbol('foo');
    const key = Symbol.keyFor(localSymbol);
    assert.equal(key, void 0);
  });

  it('predefined symbols are not in the runtime-wide registry either', function() {
    const key = Symbol.keyFor(Symbol.iterator);
    assert.equal(key, void 0);
  });

  it('for non-Symbols throws an error', function() {
    function fn() {
      Symbol.keyFor(42);
    }

    assert.throws(fn);
  });
});
