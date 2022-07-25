const pokemons = [
    {
      name: 'Bulbasaur',
      type: 'Grass',
      ability: 'Razor Leaf',
    },
    {
      name: 'Charmander',
      type: 'Fire',
      ability: 'Ember',
    },
    {
      name: 'Squirtle',
      type: 'Water',
      ability: 'Water Gun',
    },
  ];
  
  function getPokemonDetails(filter, callback) {
    setTimeout(() => {
      if (pokemons.find(filter) === undefined) { //filter é a callback de find
        return callback(new Error('Não temos esse pokémon para você :('), null);
      }
      const pokemon = pokemons.find(filter);
  
      const { name, type, ability } = pokemon;
  
      const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
  
      callback(null, messageFromProfOak);
    }, 2000);
  }
  
 const errorMessage = (error, message) => {
    if(error) {
      console.log(error);
    } else {
      console.log(message);
    }
  }

 const chosenPokemon =  (pokemon) => pokemon.name === 'Charmander';

  getPokemonDetails(chosenPokemon, errorMessage);
  
  module.exports = {
    getPokemonDetails,
    errorMessage,
    chosenPokemon,
  };