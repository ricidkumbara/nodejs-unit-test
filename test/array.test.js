test('array simple', () => {
    const names = ['ricid', 'kumbara', 'additional']
    expect(names).toEqual(['ricid', 'kumbara', 'additional'])
    expect(names).toContain('ricid')
})

test('array object', () => {
    const persons = [
        { name: 'Ricid' },
        { name: 'Kumbara' }
    ]

    expect(persons).toContainEqual({ name: 'Ricid' })
})