// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const randomIntegerInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const randomOneToFive = randomIntegerInclusive(1,5);


const checkBingo = (number) => {
    if (number === randomOneToFive) {
        return 'Parabéns! Você ganhou';
    }
    else {
        return 'Tente novamente';
    } 
}

console.log(checkBingo(3));
