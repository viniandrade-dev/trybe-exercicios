let reverseWord = '';
let word = 'vinicius';


for(i = word.length - 1; i >= 0; i -= 1){
    reverseWord += word[i]
}

console.log(reverseWord);