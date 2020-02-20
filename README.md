# Test Project for ESNext Proposals

- [partial-application](https://github.com/tc39/proposal-partial-application)
- [pipeline-operator](https://github.com/tc39/proposal-pipeline-operator)

## Getting Started

Install dependencies

```bash
$ npm ci
```

## Running

```bash
$ npm run start
12
```

## Code

[src/index.js](src/index.js)

```javascript
const multiply = (x, y) => x * y;
const double = multiply(2, ?);
const triple = multiply(3, ?);

const value = x => x
  |> double
  |> multiply(3, ?)

console.log(value(2)) //=> 12
```
