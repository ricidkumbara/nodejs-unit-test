import { sum } from '../src/sum.js'

beforeEach(() => {
    console.log('Before Each')
})

beforeAll(() => {
    console.log('Before All')
})

afterEach(() => {
    console.log('After Each')
})

afterAll(() => {
    console.log('After all')
})

test('First test', () => {
    console.log('First test')
    expect(sum(10, 10)).toBe(20)
})

test('Second test', () => {
    console.log('Second test')
    expect(sum(10, 10)).toBe(20)
})