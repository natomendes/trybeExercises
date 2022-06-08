// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function callback(reject, resolve) {
      expect(reject).toEqual(expectedError);
      done();
    }
    getPokemonDetails(({ name }) => name === 'pokemonName', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    function callback(reject, resolve) {
      expect(resolve).toBe(expectedString);
      done();
    }
    getPokemonDetails(({ name }) => name === 'Charmander', callback)
  });
});