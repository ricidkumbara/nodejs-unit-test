import { sumAll } from '../src/sum.js'

// using array
const tables = [
    [[10, 10, 10], 30],
    [[20, 20, 20], 60],
    [[30, 30, 30], 90],
    [[1, 2, 3], 6],
]

test.each(tables)("test sumAll(%s) should result %i", (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected)
})

const newTables = [
    { numbers: [10, 10, 10], expected: 30 },
    { numbers: [20, 20, 20], expected: 60 },
    { numbers: [30, 30, 30], expected: 90 },
]

// using array object
test.each(newTables)("test sumAll($numbers) should result $expected", ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected)
})
