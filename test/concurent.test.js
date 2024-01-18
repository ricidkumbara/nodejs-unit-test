import { sayHelloAsync } from "../src/async.js"


test.concurrent('concurent 1', async () => {
    await expect(sayHelloAsync('Ricid')).resolves.toBe('Hello Ricid')
})

test.concurrent('concurent 2', async () => {
    await expect(sayHelloAsync('Ricid')).resolves.toBe('Hello Ricid')
})

test.concurrent('concurent 3', async () => {
    await expect(sayHelloAsync('Ricid')).resolves.toBe('Hello Ricid')
})

test.concurrent('concurent 4', async () => {
    await expect(sayHelloAsync('Ricid')).resolves.toBe('Hello Ricid')
})

test.concurrent('concurent 5', async () => {
    await expect(sayHelloAsync('Ricid')).resolves.toBe('Hello Ricid')
})

test.concurrent('concurent 6', async () => {
    await expect(sayHelloAsync('Ricid')).resolves.toBe('Hello Ricid')
})
