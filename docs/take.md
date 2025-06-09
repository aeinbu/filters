# take
Used to create a new collection with by taking the first *count* elements.

**Syntax**:  
`take(count)`  
Usage in a filter:  
`array.filter(take(count))`

**Arguments**:  
- `count` (number) how many elements to take.

**Usage**:
```javascript
const testData = ['a', 'b', 'c', 'd', 'e']

const res = testData.reduce(take(3), [])

// Result:
// [ 'a', 'b', 'c']
```

**Remarks**:
- If count is larger than the number of elements in the array, the result is a copy of the original array.


**See also**:
- [skip](./skip.md)
- [unit tests for take](../tests/take.tests.ts)
