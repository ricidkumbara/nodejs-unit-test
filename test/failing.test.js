import { sayHello } from "../src/sayHello.js"

test('sayHello success', () => {
    expect(sayHello('Ricid')).toBe('Hello Ricid')
})

test.failing('sayHello error', () => {
    sayHello(null)
})

test('sayHello error matchers', () => {
    expect(() => sayHello(null)).toThrow()
})
