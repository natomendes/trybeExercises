// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const { uppercase } = require('./exercise7');

describe('Testing uppercase Function', () => {
  it('Should return string in Uppercase', (done) => {
    uppercase('renato', (str) => {
      try {
      expect(str).toBe('RENATO');
      done();
      } catch(error) {
        done(error);
      }
    })
  });
});

