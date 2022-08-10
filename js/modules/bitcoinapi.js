export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      const span = document.querySelector(target);
      const price = (1000 / json.BRL.sell).toFixed(4);
      span.innerText = price;
    }).catch((error) => {
      console.log(Error(error));
    });
}
