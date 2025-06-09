# @aeinbu/aggregates

Lightweight and non-intrusive aggregate functions to use with array filters

- The functions are lightweight, as they are small and don't make you bring along lots of functions you don't need.
- These functions run just as well in a browser as they do in nodejs.
- The package is non-intrusive, as it doesn't extend arrays adding new and non-standard methods to them.
  - This is done by having functions that you use with `.filter(...)` on arrays.
- @types are included for better discoverability during development when you use editors with javascript/typescript intellisence support


## How to install <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@aeinbu/filters">

With npm
```shell
npm install @aeinbu/filters
```
...or with yarn
```shell
yarn add @aeinbu/filters
```

## Quickstart
```javascript
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const result1 = data
    .filter(skip(3))
    .filter(take(4))

// result1 is [40, 50, 60, 70]

const result2 = data
    .filter(except([30, 60]))

// result2 is [10, 20, 40, 50, 70, 80, 90]
```

## Documentation
For more documentation, follow these links:
- [take](./take.md)
- [skip](./skip.md)
- [except](./except.md)

Also, look in the `tests` directory for more examples. The tests demonstrate more ways to use this library

## Semantic versioning
This package follows semantic versioning (See [semver.org](https://semver.org) for more info)

## License
This package is published under the MIT License. (See [LICENSE file](/LICENSE) for more info)
