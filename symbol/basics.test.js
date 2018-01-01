const assert = require('assert');

describe('Symbol', function() {
  it('`Symbol` lives in the global scope', function(){
    const expected = window.Symbol;
    assert.equal(Symbol, expected);
  });

  it('every `Symbol()` is unique', function(){
    const sym1 = Symbol();
    const sym2 = Symbol();
    assert.notEqual(sym1, sym2);
  });

  it('every `Symbol()` is unique, also with the same parameter', function(){
    var sym1 = Symbol('foo');
    var sym2 = Symbol('foo');
    assert.notEqual(sym1, sym2);
  });

  it('`typeof Symbol()` returns "symbol"', function(){
    const theType = typeof Symbol();
    assert.equal(theType, 'symbol');
  });

  it('`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects', function(){
    function fn() {
      new Symbol();
    }

    assert.throws(fn);
  });
});
