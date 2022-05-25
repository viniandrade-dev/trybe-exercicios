/*var list = [12,34,11,10,34,100,5,6,2,2,90];

var length = list.length-1;

//loop para por em ordem crescente
for(var i=0; i<length; i++){
    for(j=0; j<length; j++){
        if(list[j]>list[j+1]){
                [ list[j] , list[j+1] ] = [ list[j+1] , list[j] ];
        }
        console.log(list);
    }
}
console.log(list[list.length-1]);*/

let array = ['java', 'python', 'html', 'css', 'javascript'];

let word = '';
  
for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < word.length) {
      word = array[i];
    }
  }

  console.log(word);



