// apiScript.js
const API_URL = 'https://api.coincap.io/v2/assets';
const API2_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json';

const fetchBrltoUsD = async () => {
  try {
    const response = await fetch(API2_URL);
    const data = await response.json();
    return data.brl;
  } catch(error) {
    console.log(error);
  }
}

const fetchCryptoList = async () => {
  const cryptoUl = document.querySelector('#crypto-list');
  try {
  const brlValue = await fetchBrltoUsD();
  const response = await fetch(API_URL);
  const data = await response.json();
  const { data: cryptoList } = data;
  cryptoList.filter(({ rank }) => rank <= 10)
    .map(({ name, priceUsd }) => {
      const price = Number(priceUsd * brlValue).toFixed(2);
      const newLi = document.createElement('li');
      newLi.innerText = `${name} - Preço(R$): ${price}`;
      cryptoUl.appendChild(newLi);
    })
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  fetchCryptoList();  
};