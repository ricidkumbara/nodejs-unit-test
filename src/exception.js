export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === 'Ricid') {
        throw new MyException('Ups, something when wrong')
    } else {
        return 'OK'
    }
}
