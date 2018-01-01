function tagFunction(s, value) {
  console.log(s) // ['template string'];
  console.log(s.raw);
  console.log(value);
  console.log(String.raw`\\`); // two escaped backslashes
  return s.toString();
}

const evaluated = tagFunction `template string ${23}`;
console.log(evaluated);

// You can also use rest
function getValues(strings, first_value, second_value, third_value) {
  console.log(strings);
  console.log(first_value);
  console.log(second_value);
  console.log(third_value);
  return second_value;
}

const one = 1;
const two = 2;
const three = 3;

getValues`uno ${one} dos ${two} ${three}`;
