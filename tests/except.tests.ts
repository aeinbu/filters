import { except } from "../src"


describe('except', () => {

    test('Return all elements of an array, except elements that equal an elements in the except list', () => {
        const testData = [ 10, 20, 30, 40, 50 ]

        const res = testData.filter(except([20, 30]))

        expect(res).toEqual([ 10, 40, 50 ])
    })


    test('Return all elements of an array, except elements that match the except list using the default compareFn (deepEquals)', () => {
        const testData = [ {a:1}, {a:2}, {a:3}, {a:4}, {a:5} ]

        const res = testData.filter(except([{a:2}, {a:3}]))

        expect(res).toEqual([ {a:1}, {a:4}, {a:5} ])
    })


    test('Return all elements of an array, except elements that match the except list using a custom compare function', () => {
        const testData = [
            { firstName: 'John', lastName: 'Doe' },
            { firstName: 'Jane', lastName: 'Doe' },
            { firstName: 'Jim', lastName: 'Beam' },
            { firstName: 'Jack', lastName: 'Daniels' },
            { firstName: 'Johnny', lastName: 'Walker' } 
        ]
        const compareFn = (a: any, b: any) => a.lastName === b.lastName

        const res = testData.filter(except([{lastName: 'Doe'}], compareFn))

        expect(res).toEqual([
            { firstName: 'Jim', lastName: 'Beam' },
            { firstName: 'Jack', lastName: 'Daniels' },
            { firstName: 'Johnny', lastName: 'Walker' }
        ])
    })

})