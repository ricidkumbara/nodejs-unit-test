import { MyException, callMe } from "../src/exception"

test('exception', () => {
    expect(() => callMe('Ricid')).toThrow()
    expect(() => callMe('Ricid')).toThrow(MyException)
    expect(() => callMe('Ricid')).toThrow('Ups, something when wrong')
})

test('not execption', () => {
    expect(() => callMe('Fulan')).not.toThrow()
})

test('not execption', () => {
    expect(callMe('Fulan')).toBe('OK')
})