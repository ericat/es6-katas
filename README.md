## Promises
promise.race -> order and timing matter! (investigate)

* object.is() determines value equality
* Remember months start with 0

* Spread with strings has wings:

  const max = Math.max(...'12345');
  assert.deepEqual(max, 5);

* let can create artificial scope:
  it('create artifical scope, using curly braces', () => {
      {
      let letX = true;
      }

      assert.throws(() => console.log(letX));
      });
  });

* A promise is fulfilled when it resolves to a value
* default param triggers if you pass undefined to a function
* you can use destructuring to get the tail of an array
* needs brackets if you return an object:
  var func = () => { return {iAm: 'an object'}};
* in classes, this is now lexical (at writing time) not dynamic (at runtime)

## Arrays
* Array.from can manipulate the array in the second arg:
  Array.from(arrayLike, (value) => value.toUpperCase());
* Array.of:
  Array.of(10);
* Array.fill:
  new Array(3).fill(0);
* Array.find and findIndex accept a lambda
* Array.entries returns key and value, however it's an iterator! To access, you
    need to build an array from it as Array.from:
    Array.from(arr.entries());
* Build a quick array from keys: [...arr.keys()]

## Strings
* String.includes() also works with an object with a toString method:
  const objWithToString = {toString: () => 1};
  assert.equal('123'.includes(objWithToString), true);
* includes also works with a substring - accepts the index where to start searching from.
* startsWith also works with a whole string.

## Objects
* The new object literal syntax works with functions too!
  This is allowed: const func = { inlineFunc() { return 'I am inline' }};
  Or this, for short: const func = { inlineFunc: () => 'I am inline' };
  This would work as well: const func = { ['inlineFunc']: () => 'I am inline' };
* computed properties need to be wrapped in [expression]
* getter and setters are special methods; here is one combined with a computed property:
  const keyName = 'x';
  const obj = { get [keyName]() { return 'ax'; }};
* getters and setters can also be dynamic:
  ```
  set [publicPropertyName](value) {
    obj[privatePropertyName] = value;
  }
  ```

## Maps
* A map does not coerce keys;
* What about Maps? This is how you create a Map from an object:
  ```
    let map = new Map();
    const obj = {x: 1, y: 2};
    const keys = Object.keys(obj);
    keys.forEach(key => map.set(key, obj[key]));
  ```

## Class
* Classes are block scoped: {class Inside {}}
* typeof class{} is a function
* Simple getter and setter examples:
  ```
    class MyAccount {
      get balance() { return this.amount; }
      set balance(amount) { this.amount = amount; }
    }

    const account = new MyAccount();
    account.balance = 23;
  ```

## Destructuring
* Throwaway values with commas:
  ```
  it('in for-of loop', () => {
    for (var [, a, b] of [[0, 1, 2]]) {}
    assert.deepEqual([a, b], [1, 2]);
  });
  ```

## Symbols
* A symbol is a unique and immutable data type and may be used as an identifier for object properties
* You can do Symbol() but not new Symbol() to prevent creation of wrapper objects.
* Symbol.for('symbol') != Symbol(), which creates one every time and does not store it;
* Symbol() is local, Symbol.for('x') is global.keyFor
* Symbol.keyFor retrieves a global key
* Symbols as unique object keys. // use getOwnPropertySymbols to display them

## Tagged templates
Good for manipulating strings.
* the first param of a tagged template receives the string as an array;


