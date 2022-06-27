// const fatorial = (number) => {
//   let fatorialNumber = number;
//   if (number == 0 || number == 1) {
//     return 1;
//   } else {
//     for (let index = number; index > 1; index -= 1) {
//       fatorialNumber = fatorialNumber * (index - 1);
//     }
//   }
//   return fatorialNumber;
// };

//console.log(fatorial(1));

const factorial = n => {
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
const n = 7;
console.log(`The factorial of ${n} is ${factorial(n)}`);
