// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, } = require("./exercicio8.js");

describe("A função getPokemonDetails", () => {
  
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    
    const expected = new Error('Não temos esse pokémon para você :(');
    const chosenPokemon = (pokemon) => pokemon.name === 'Pikachu';
    
    function callback(error, data) {
        expect(error).toEqual(expected)
        done()
    }           
   
    getPokemonDetails(chosenPokemon, callback); 
    
  })

  
  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    const chosenPokemon = (pokemon) => pokemon.name === 'Charmander';
    
    function callback(error, data) {
        expect(data).toEqual(expected)
        done()
    }           
   
    getPokemonDetails(chosenPokemon, callback); 
  
  });

});