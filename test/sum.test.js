import { sum, sumAll } from "../src/sum.js"

test('sum(1,2) must 3', () => {
    const result = sum(1, 2)

    expect(result).toBe(3)
})

test('test sum function', () => {
    const result = sum(1, 2)

    expect(result).toBe(3)
})

test('test sum all', () => {
    expect(sumAll([1,1])).toBe(2)
})