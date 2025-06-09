export { skip, take } from './skip-take'


// -skipUntil, takeUntil, skipUpTo, takeUpTo, skipAtLeast, takeAtLeast, skipAtMost, takeAtMost?
// 	col.takeUntil(100, sum())
// 	col.takeUntil(5000, sumBy(x => x.population))

// -skipWhile, skipUntil, takeWhile, takeUntil??
//  col.skipWhile(x => x < 100) // skip until all elements until an element is reached that isn't less than 100. Stop skipping at that element.
// 	col.takeUntil(100, sum())   // take until an sum of elements is 100 (inclusive or exclusive?)

export { except } from './except'

// -except (or remove?)
// 	col.filter(except(x), [])
// 	col.filter(exceptAll(x), [])
//  col.filter(except([x, y, z]), [])
//  col.filter(exceptAll([x, y, z]), [])

export { isDeepEqual } from './isDeepEqual'
