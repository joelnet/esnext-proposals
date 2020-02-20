const multiply = (x, y) => x * y;
const double = multiply(2, ?);
const triple = multiply(3, ?);

const value = x => x
  |> double
  |> multiply(3, ?)

console.log(value(2))

