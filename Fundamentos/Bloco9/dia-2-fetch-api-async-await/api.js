const append = (listItem) => {
    const ul = document.getElementById('coin-list');
    const li = document.createElement('li');
    li.innerHTML = listItem;
    ul.appendChild(li);
}

const extractInfo = (array) => {
    return `${array.id} (${array.symbol}): valor em dólares $${array.priceUsd} `;
}


async function getCrypto() {
    try {
      const response = await fetch('https://api.coincap.io/v2/assets');
      const data = await response.json();
      const item = data.data.map(extractInfo);
      item.filter((element, index) => index < 10).forEach(append);
    } catch (error) {
      console.log(error);
    }
  }

  getCrypto();