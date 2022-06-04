let ondeEstou = document.getElementById('elementoOndeVoceEsta');

ondeEstou.parentElement.parentElement.style.color = 'green';

ondeEstou.nextElementSibling.innerText = 'Maior doidera esse lance de DOM';

let firstChild = document.getElementById('pai').firstElementChild;

firstChild = ondeEstou.parentElement;

let textAtencao = ondeEstou.parentElement.innerText;

let irmaoDeOndeEstou = document.createElement('section');

let pai = document.querySelector('#pai');

irmaoDeOndeEstou.innerText = 'Aloou, som, teste';

pai.appendChild(irmaoDeOndeEstou);

let filhoDeOndeEstou = document.createElement('section');

filhoDeOndeEstou.innerText = 'vai que e sua filhao';

ondeEstou.appendChild(filhoDeOndeEstou);



