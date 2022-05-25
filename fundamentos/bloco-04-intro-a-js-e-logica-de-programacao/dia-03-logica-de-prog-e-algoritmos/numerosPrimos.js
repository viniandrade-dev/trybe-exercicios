console.log(`The prime numbers between 1 and 50 are:`);
for (let i = 1; i <= 50; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = 1;
            break;
        }
    }
        if (i > 1 && flag === 0) {
        console.log(i);
    }
}





