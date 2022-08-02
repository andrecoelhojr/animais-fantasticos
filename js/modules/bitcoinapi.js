export default function initBTC() {
  const span = document.querySelector(".btcPrice");

  fetch("https://blockchain.info/ticker")
  .then(resp => resp.json())
  .then(json => {
    const price = (1000 / json.BRL.sell).toFixed(4);
    span.innerText = price;
  }).catch(error => {
    console.log(Error(error));
  });
}