import { sumAll } from '../src/sum.js'

describe('when call sumAll()', () => {
    it('should get 30 with parameter [10, 10, 10]', () => {
        expect(sumAll([10, 10, 10])).toBe(30)
    })

    it('should get 15 with parameter [5, 5, 5]', () => {
        expect(sumAll([5, 5, 5])).toBe(15)
    })
})