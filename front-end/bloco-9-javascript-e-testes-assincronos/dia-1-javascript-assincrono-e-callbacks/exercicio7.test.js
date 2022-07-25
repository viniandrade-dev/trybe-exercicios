// const { exportAllDeclaration } = require("@babel/types");
// const { default: test } = require("node:test");

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  describe('Teste do exercício 7', () => {
    it('Verifica se recebe a string "eu sou goiaba" e retorna "EU SOU GOIABA"', (done) => {
        const callback = (string) => {
            try {
              expect(string).toBe('EU SOU GOIABA');
              done();
            } catch (error) {
              done(error);
            }
          }
        uppercase('eu sou goiaba', callback)
    });
  });