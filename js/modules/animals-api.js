import AnimateNumber from './anima-number.js';

export default function initAnimailsApi() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.species}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function animalsApi(url) {
    try {
      const responseAnimals = await fetch(url);
      const jsonAnimals = await responseAnimals.json();
      const divAnimals = document.querySelector('.numeros-grid');
      jsonAnimals.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        divAnimals.appendChild(divAnimal);
      });

      const animaNumber = new AnimateNumber('[data-numero', '.numeros', 'ativo');
      animaNumber.init();
    } catch (error) {
      console.log(Error(error));
    }
  }

  animalsApi('./animalsapi.json');
}
