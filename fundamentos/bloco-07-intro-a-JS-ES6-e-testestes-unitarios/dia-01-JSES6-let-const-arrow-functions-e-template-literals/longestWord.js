const longestWord = str => {
    const strSplit = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < strSplit.length; i +=1){
      if(strSplit[i].length > longestWord.length){
      longestWord = strSplit[i];
       }
    }
    return longestWord;
  }
  
  console.log(longestWord("The quick brown fox jumped over the lazy dog"));



