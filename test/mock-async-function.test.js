import { getBalance } from "../src/async.js"

test('mock async function', async () => {
    const from = jest.fn()
    from.mockResolvedValueOnce(1000)

    await expect(getBalance('Ricid', from)).resolves.toEqual({
        name: 'Ricid',
        balance: 1000
    })

    expect(from.mock.calls.length).toBe(1)
    await expect(from.mock.results[0].value).resolves.toBe(1000)
})