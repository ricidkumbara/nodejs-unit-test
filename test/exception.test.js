import { MyException, callMe } from "../src/exception"

test('exception', () => {
    expect(() => callMe('Ricid')).toThrow()
    expect(() => callMe('Ricid')).toThrow(MyException)
    expect(() => callMe('Ricid')).toThrow('Ups, something when wrong')
})