const fetch = require('node-fetch');

const fetchCrypto = async () => {
  const url = 'api.coincap.io/v2/assets';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchCrypto();
