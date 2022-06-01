// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => jokeContainer.innerText = data.joke)
    .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();