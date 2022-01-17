const sum = require('./sum');

it('adds 4 + 5 to equal 9', () => {
    expect(sum(4,5)).toBe(9);
});

it('adds 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
});

it('adds string throw error', () => {
    function addString() {
      sum(4,'5');
    };
    expect(addString).toThrowError(Error);
});

it('adds string throw error: parameters must be numbers', () => {
    function addString() {
      sum(4,'5');
    };
    expect(addString).toThrowError(new Error('parameters must be numbers'));
});

