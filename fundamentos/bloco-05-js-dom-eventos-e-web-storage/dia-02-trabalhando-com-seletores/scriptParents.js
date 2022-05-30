let ondeEstou = document.getElementById('elementoOndeVoceEsta');

ondeEstou.parentElement.parentElement.style.color = 'green';

ondeEstou.nextElementSibling.innerText = 'Maior doidera esse lance de DOM';

let firstChild = document.getElementById('pai').firstElementChild;

firstChild = ondeEstou.parentElement;

let textAtencao = ondeEstou.parentElement.innerText;

let terceiroFilho = ondeEstou.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;



