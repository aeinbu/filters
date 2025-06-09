import { take } from "../src/"


describe('take', () => {

    test('Take the first n elements of an array', () => {
        const testData = [ 10, 20, 30, 40, 50 ]

        const res = testData.filter(take(2))

        expect(res).toEqual([ 10, 20 ])
    })

    test('Take more elements than there are in the array', () => {
        const testData = [ 10, 20, 30, 40, 50 ]

        const res = testData.filter(take(10))

        expect(res).toEqual([ 10, 20, 30, 40, 50 ])
    })

})