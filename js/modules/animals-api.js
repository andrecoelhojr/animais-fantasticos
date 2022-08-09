import AnimateNumber from './anima-number.js';

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.species}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const divAnimals = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    divAnimals.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animaNumber = new AnimateNumber('[data-numero', '.numeros', 'ativo');
    animaNumber.init();
  }

  async function createAnimals() {
    try {
      const responseAnimals = await fetch(url);
      const jsonAnimals = await responseAnimals.json();
      jsonAnimals.forEach((animal) => fillAnimals(animal));
      animateAnimalsNumbers();
    } catch (error) {
      console.log(Error(error));
    }
  }

  return createAnimals();
}
