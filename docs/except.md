# except
Creates a new array without one or a set of values.

**Syntax**:  
`except(value)`  
Usage in a filter:  
`array.filter(except(value))`

**Arguments**:  
- `value` (any) what value to skip.

**Usage**:
```javascript
const testData = ['a', 'b', 'c', 'd', 'e']

const res = testData.reduce(except('b'), [])

// Result:
// ['a', 'c', 'd', 'e']
```

**Remarks**:
*none*

**See also**:
- [unit tests for except](../tests/except.tests.ts)
