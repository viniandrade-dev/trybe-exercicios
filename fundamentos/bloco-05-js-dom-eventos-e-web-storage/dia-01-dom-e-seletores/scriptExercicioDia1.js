let paragraph = document.getElementsByTagName('p');

paragraph[0].innerText = 'Daqui 2 anos me vejo tendo um emprego como desenvolvedor, recebendo um bom salário, aw yeah baby';

let mainContent = document.getElementsByClassName('main-content');

mainContent[0].style.backgroundColor = 'rgb(76,164,109)';

let centerContent = document.getElementsByClassName('center-content');

centerContent[0].style.backgroundColor = 'white';

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';

for(i = 0; i < paragraph.length; i += 1){
    paragraph[i].style.textTransform = 'uppercase';
    console.log(paragraph[i].innerText);
}