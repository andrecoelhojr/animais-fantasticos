export default function initDropDownMenu() {

}

const dropdownMenus = document.querySelectorAll("[data-dropdown");

dropdownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach(item => {
    menu.addEventListener(item, handleClick);
  }) 
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
}