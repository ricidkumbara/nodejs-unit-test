test('test to be', () => {
    const name = 'Ricid'
    const hello = `Hello ${name}`

    expect(hello).toBe('Hello Ricid')
})

test('test to equal', () => {
    const person = { id: 'ricid' }
    Object.assign(person, { name: 'Ricid' })

    expect(person).toEqual({ id: 'ricid', name: 'Ricid' })
})
