const myFizzBuzz = require('./fizzBuzz');

describe('testing myFizzBuzz', () => {
    it('Multiplo de 3 retorna Fizz', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
        expect(myFizzBuzz(18)).toEqual('fizz');
        expect(myFizzBuzz(21)).toEqual('fizz');
        expect(myFizzBuzz(33)).toEqual('fizz');
    });
    it('Multiplo de 5 retorna buzz', () => {
        expect(myFizzBuzz(5)).toEqual('buzz');
        expect(myFizzBuzz(20)).toEqual('buzz');
        expect(myFizzBuzz(50)).toEqual('buzz');
    });
    it('Multiplo de 3 e 5 retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
        expect(myFizzBuzz(30)).toEqual('fizzbuzz');
        expect(myFizzBuzz(90)).toEqual('fizzbuzz');
    });
    it('Numero nao divisivel por 3 e 5 retorna o numero', () => {
        expect(myFizzBuzz(17)).toBe(17);
        expect(myFizzBuzz(11)).toBe(11);
        expect(myFizzBuzz(37)).toBe(37);
    });
    it('Not number added returns false', () => {
        expect(myFizzBuzz('17')).toBe(false);
    });
});