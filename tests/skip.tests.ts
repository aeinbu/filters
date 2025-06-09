import { skip } from "../src/"


describe('skip', () => {

    test('Skip the first n elements of an array', () => {
        const testData = [ 10, 20, 30, 40, 50 ]

        const res = testData.filter(skip(2))

        expect(res).toEqual([ 30, 40, 50 ])
    })

    test('Skip more elements than there are in the array', () => {
        const testData = [ 10, 20, 30, 40, 50 ]

        const res = testData.filter(skip(10))

        expect(res).toEqual([])
    })

})