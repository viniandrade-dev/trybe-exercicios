// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';  

function append(data) {
    const joke = document.getElementById('jokeContainer');
    joke.innerHTML = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => append(data));
};

window.onload = () => fetchJoke();