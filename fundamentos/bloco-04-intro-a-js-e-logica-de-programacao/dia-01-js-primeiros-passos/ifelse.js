const grade = 59;

if(grade >= 80){
    console.log('Parabéns, você foi aprovado!');
}
else if(grade < 80 && grade >= 60){
    console.log('Você está na nossa lista de espera.');
}
else if(grade < 60){
    console.log('Você foi reprovado.');
}