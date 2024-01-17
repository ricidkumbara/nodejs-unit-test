test('string', () => {
    const name = 'Ricid Kumbara'

    expect(name).toBe('Ricid Kumbara')
    expect(name).toMatch(/cid/)
})
