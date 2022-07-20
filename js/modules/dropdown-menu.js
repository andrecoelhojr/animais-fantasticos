import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown");
  const events = ["click", "touchstart"];

  dropdownMenus.forEach((menu) => {
    events.forEach(item => {
      menu.addEventListener(item, handleClick);
    }) 
  });
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, events, () => {
      this.classList.remove("active");
    });
  }
}