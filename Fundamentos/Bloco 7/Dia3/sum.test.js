const sum = require('./sum');

test('adds 4 + 5 to equal 9', () => {
    expect(sum(4,5)).toBe(9);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
});

test('adds string throw error', () => {
    function addString() {
      sum(4,'5');
    };
    expect(addString).toThrowError(Error);
});

test('adds string throw error: parameters must be numbers', () => {
    function addString() {
      sum(4,'5');
    };
    expect(addString).toThrowError(new Error('parameters must be numbers'));
});

