const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

test('Testando uppercase, test em TEST', (done) => {
    uppercase('test', (result) => {
      try {
        expect(result).toEqual("TEST");
        done();
      } catch (error) {
        done(error);
      }
    });
  });