const name = 'Vinicíus';
const birthCity = 'Brasília';
let birthYear = 1998;

console.log(name, birthCity, birthYear);

birthYear = 2030;

console.log(birthYear);

birthCity = 'London';
console.log(birthCity); //Recebemos mensagem de erro, porque birthCity é uma variável constante, portante qualquer alteração no seu valor declarado implicará em erro.