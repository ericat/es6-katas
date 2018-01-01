const assert = require('assert');

describe('An object literal can also contain getters', () => {
  it('just prefix the property with `get` (and make it a function)', function() {
    const obj = {
      get x() { return 'ax'; }
    };

    assert.equal(obj.x, 'ax');
  });

  it('must have NO parameters', function() {
    const obj = {
      get x() { return 'ax'; }
    };

    assert.equal(obj.x, 'ax');
  });

  it('can be a computed property (an expression enclosed in `[]`)', function() {
    const keyName = 'x';
    const obj = {
      get [keyName]() { return 'ax'; }
    };

    assert.equal(obj.x, 'ax');
  });

  it('can be removed using delete', function() {
    const obj = {
      get x() { return 'ax'; }
    };

    delete(obj.x)
    assert.equal(obj.x, void 0);
  });
});
