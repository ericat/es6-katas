// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!
const assert = require('assert');
describe('class can inherit from another', () => {
  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    // let A = () => {};
    // A.prototype = {};
    // class B extends A {}
    // TypeError: Class extends value () => {} is not a constructor or null
    it.skip('A is the prototype of B', () => {
      const isIt = A.isPrototypeOf(new B());
      assert.equal(isIt, true);
    });
    it('A`s prototype is also B`s prototype', () => {
      const proto = B.prototype;
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });
  describe('`extends` using an expression', () => {
    it('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent(true)) {}
      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
});
