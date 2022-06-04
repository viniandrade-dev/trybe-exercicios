let title = document.createElement("h1");
title.innerText = "Exercício 5.2 - JavaScript DOM";
title.className = "title";

let body = document.querySelector("body");
body.appendChild(title);

let main = document.createElement("main");
main.className = "main-content";
body.appendChild(main);

let section = document.createElement("section");
section.className = "center-content";
main.appendChild(section);

let paragraph = document.createElement("p");
paragraph.innerText = "JavaScript é muito doido, esse DOM é muito daora";
section.appendChild(paragraph);

let sectionLeft = document.createElement("section");
sectionLeft.className = "left-content";
main.appendChild(sectionLeft);

let sectionRight = document.createElement("section");
sectionRight.className = "right-content";
main.appendChild(sectionRight);

let image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.className = "small-image";
sectionLeft.appendChild(image);

let list = document.createElement("ul");
sectionRight.appendChild(list);
let numbers = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

for (let i = 0; i < numbers.length; i += 1) {
  let listItem = document.createElement("li");
  listItem.innerText = numbers[i];
  list.appendChild(listItem);
}

for (let j = 0; j < 3; j += 1) {
  let titleThree = document.createElement("h3");
  titleThree.innerText = "isso deve aparece 3 vezes";
  titleThree.className = "description";
  main.appendChild(titleThree);
}

main.removeChild(sectionLeft);
sectionRight.style.marginRight = "auto";
main.style.backgroundColor = "green";

arrayListItem = document.getElementsByTagName("li");

for (let k = 0; k < arrayListItem.length; k += 1) {
  if (arrayListItem[k].innerText.includes("nove")) {
    list.removeChild(arrayListItem[k]);
  }
}

for (k = 0; k < arrayListItem.length; k += 1) {
    if (arrayListItem[k].innerText.includes("dez")) {
      list.removeChild(arrayListItem[k]);
    }
  }
  

