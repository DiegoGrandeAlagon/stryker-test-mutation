import { sum, toUpperCaseSentence } from "./GenericFunctions"

describe('sum function', () => {

    test('result must be the sum of two numbers', ()=>{
        const result = sum(5 , 5)
        expect(result).toBe(10);
    })
})

describe('to upper case function', ()=>{
    test('must be return the first character with uppercase', ()=>{
        const res = toUpperCaseSentence('hola');
        expect(res).toBe('HOLA');
    })
})