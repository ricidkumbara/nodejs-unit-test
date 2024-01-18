beforeAll(() => console.log('Before All Outer'))
afterAll(() => console.log('After All Outer'))
beforeEach(() => console.log('Before Each Outer'))
afterEach(() => console.log('After Each Outer'))

test('Test Outer', () => { console.log('Test Outer') })

describe('Inner', () => {
    beforeEach(() => console.log('Before Each Outer'))
    afterEach(() => console.log('After Each Outer'))

    test('Test Inner', () => console.log('Test Inner'))
})
