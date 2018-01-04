const assert = require('assert');

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {
  it('`Promise` is a global function', function() {
    const expectedType = 'function';
    assert.equal(typeof Promise, expectedType);
  });

  describe('the constructor', function() {
    it('instantiating it without params throws', function() {
      const fn = () => { new Promise() }
      assert.throws(fn);
    });

    it('expects a function as parameter', function() {
      const param = () => {};
      assert.doesNotThrow(() => { new Promise(param); });
    });
  });

  describe('simplest promises', function() {
    it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
      let promise = new Promise((resolve) => {
        resolve();
      });
      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });

    it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
      let promise = new Promise((resolve) => {
        resolve(42);
      });
      promise
        .then(value => {assert.equal(value, 42); done(); })
        .catch(() => done(new Error('The promise is expected to resolve with 42!')));
    });

    it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
      let promise = new Promise((resolve, reject) => {
        reject();
      });
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
  });

  describe('an asynchronous promise', function() {
    it('can resolve later, also by calling the first callback', function(done) {
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
      });
      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });

    it('reject it at some later point in time, calling the 2nd callback', function(done) {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(), 100);
      });
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
  });
});
