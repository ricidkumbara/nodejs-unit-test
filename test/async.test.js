import { sayHelloAsync } from "../src/async.js"

test('test async function', async () => {
    const result = await sayHelloAsync('Ricid')
    expect(result).toBe('Hello Ricid')
})

test('test async matchers', async () => {
    await expect(sayHelloAsync('Ricid')).resolves.toBe('Hello Ricid')
    await expect(sayHelloAsync()).rejects.toBe('Name is empty')
})
