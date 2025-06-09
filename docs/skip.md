# skip
Used to create a new collection with by skipping the first *count* elements.

**Syntax**:  
`skip(count)`  
Usage in a filter:  
`array.filter(skip(count))`

**Arguments**:  
- `count` (number) how many elements to skip.

**Usage**:
```javascript
const testData = ['a', 'b', 'c', 'd', 'e']

const res = testData.reduce(skip(2), [])

// Result:
// ['c', 'd', 'e']
```

**Remarks**:
- If count is larger than the number of elements in the array, the result is an empty array.

**See also**:
- [take](./take.md)
- [unit tests for skip](../tests/skip.tests.ts)
