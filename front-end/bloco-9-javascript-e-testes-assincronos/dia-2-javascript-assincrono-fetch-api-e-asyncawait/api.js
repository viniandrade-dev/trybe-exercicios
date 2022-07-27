const apiURL = 'https://api.coincap.io/v2/assets';

const getCoin = async () => {
   const response = await fetch(apiURL);
   const bitcoin = await response.json();;
   return bitcoin.data;
}

async function append() {
    const request = await getCoin();
    const myList = document.querySelector('ul');
    request.filter(coin => coin.rank <= 10)
    .forEach(element => { 
      const creatLi = document.createElement('li');
      creatLi.innerHTML = `${element.name} (${element.symbol}): ${element.priceUsd}`;
      myList.appendChild(creatLi);
    })
}

window.onload = () => append();

