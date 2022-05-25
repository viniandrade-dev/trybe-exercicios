let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,100,2];

//exercicio 1
for(let a = 0; a < numbers.length; a += 1){
    console.log(numbers[a]);
}

console.log();
console.log();

//exercicio 2
let sum = 0;

for(let b = 0; b < numbers.length; b += 1){  //b = b + 1
    sum += numbers[b]; //sum = sum + numbers[b]
}
console.log(sum);

console.log();
console.log();

//exercicio 3
let averageNumbers = sum/numbers.length;
console.log(averageNumbers);

console.log();
console.log();

//exercicio 4
if(averageNumbers > 20){
    console.log('valor maior que 20');
}
else{
    console.log('valor menor que 20');
}

console.log();
console.log();

//exercicio 5
let max = Math.max(...numbers);
let indexes = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === max) {
      indexes.push(index);
    }
  }
  
  console.log(indexes);


  console.log();
  console.log();

  //exercicio 6

  let oddNumbers = 0;
  
  for (let c = 0; c < numbers.length; c += 1){
      if(numbers[c]%2 !== 0){
          oddNumbers += 1;
      }
      else if (oddNumbers === 0){
        console.log('Não há número ímpares');
      }  
  }
     
  console.log(oddNumbers);

  console.log();
  console.log();

  //exercicio 7

  let min = Math.min(...numbers);
  let indexesMin = [];

  for (let d = 0; d < numbers.length; d += 1) {
    if (numbers[d] === min) {
      indexesMin.push(d);
    }
  }
  
  console.log(indexesMin);

  console.log();
  console.log();

//exercicio 8

let arr = [];
let value = 0;

for(let j = 0; j < 25; j += 1){
    value += 1;
    arr.push(value);
}

console.log(arr);

for(k = 0; k < arr.length; k += 1){
    let halfDivision = arr[k]/2;
    console.log(halfDivision);
}


