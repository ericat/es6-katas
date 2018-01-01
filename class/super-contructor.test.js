const assert = require('assert');

describe('class', () => {
  it('if you `extend` a class, use `super()` to call the parent constructor', () => {
    class A {
      constructor() {
        this.levels = 1;
      }
    }

    class B extends A{
      constructor() {
        super();
        this.levels++;
      }
    }

    assert.equal(new B().levels, 2);
  });

  it('`super()` may also take params', () => {
    class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
    class B extends A {
      constructor(...args) {
        super(...args);
        this.counter++;
      }
    }

    assert.equal(new B(42, 2).counter, 45);
  });

  it('it is important where you place your `super()` call!', () => {
    class A {inc() { this.countUp = 1; }}
    class B extends A {
      // super call must be in same name method
      inc() {
        this.countUp = 2;
        super.inc();
        return this.countUp;
      }
    }

    assert.equal(new B().inc(), 1);
  });

  it.skip('use `super.constructor` to find out if there is a parent constructor', () => {
    class A extends null {
      constructor() {
        super();
        // Explodes: super constructor null of A is not a constructor
        this.isTop = !super.constructor;
      }
    }

    assert.equal(new A().isTop, false);
  });
});
