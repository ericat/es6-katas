const assert = require('assert');

describe('string is a built-in iterable object', function() {
  const s = 'abc';

  describe('string is iterable', function() {
    it('the string`s object key `Symbol.iterator` is a function', function() {
      const isA = typeof s[Symbol.iterator];
      assert.equal(isA, 'function');
    });

    it('use `Array.from()` to make an array out of any iterable', function(){
      const arr = Array.from(s);
      assert.deepEqual(arr, ['a', 'b', 'c']);
    });
  });

  describe('a string`s iterator', function() {
    let iterator;
    beforeEach(function() {
      iterator = s[Symbol.iterator]();
    });

    it('has a special string representation', function(){
      const description = iterator.toString();
      assert.equal(description, '[object String Iterator]');
    });

    it('`iterator.next()` returns an object according to the iterator protocol', function(){
      const value = iterator.next();
      assert.deepEqual(value, {done: false, value: 'a'});
    });

    it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
      iterator.next();
      iterator.next();
      iterator.next();
      assert.equal(iterator.next().done, true);
    });
  });
});
