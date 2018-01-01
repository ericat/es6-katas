const assert = require('assert');

describe('class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    class TestClass {};
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });

  it('class is block scoped', () => {
    // class Inside {}
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });

  it('special method is `constructor`', function() {
    class User {
      constructor(id) {this.id = 42};
    }

    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it('defining a method is simple', function() {
    class User {
      writesTests() {
        return false;
      }
    }

    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      constructor() { this.everWroteATest = false; }
      wroteATest() { this.everWroteATest = true; }
      isLazy() { return !this.everWroteATest; }
    }

    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

  it('anonymous class', () => {
    const classType = typeof class{};
    assert.equal(classType, 'function');
  });
});
