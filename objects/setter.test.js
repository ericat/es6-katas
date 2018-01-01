const assert = require('assert');

describe('An object literal can also contain setters', () => {
  describe('defining: a setter', function() {
    it('by prefixing the property with `set` (and make it a function)', function() {
      let theX = null;
      const obj = {
        set x(newX) { theX = newX; }
      };

      obj.x = 'the new X';
      assert.equal(theX, 'the new X');
    });

    it('must have exactly one parameter', function() {
      let setterCalledWith = void 0;
      const obj = {
        set x(value) {
          if (arguments.length === 1) {
            setterCalledWith = arguments[0];
          }
        }
      };

      assert.equal(obj.x = 'new value', setterCalledWith);
    });

    it('can be a computed property (an expression enclosed in `[]`)', function() {
      const publicPropertyName = 'x';
      const privatePropertyName = '_' + publicPropertyName;
      const obj = {
        set [publicPropertyName](value) {
          obj[privatePropertyName] = value;
        }
      };

      obj.x = 'axe';
      assert.equal(obj._x, 'axe');
    });
  });

  describe('working with/on the setter', function() {
    it('you can use `delete` to remove the property (including it`s setter)', function() {
      let setterCalled = false;
      const obj = {
        set x(param) { setterCalled = true; }
      };

      delete obj.x;
      obj.x = true;
      assert.equal(setterCalled, false);
    });
  });
});
