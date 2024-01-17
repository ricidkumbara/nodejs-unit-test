test('string.not', () => {
    const name = 'ricid'

    expect(name).not.toBe('Fulan')
    expect(name).not.toEqual('Fulan')
    expect(name).not.toMatch(/fulan/)
})

test('number.not', () => {
    const value = 2 + 2

    expect(value).not.toBeGreaterThan(6)
    expect(value).not.toBeLessThan(3)
    expect(value).not.toBe(10)
})