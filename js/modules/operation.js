export default function initOperation() {
  const element = document.querySelector("[data-week");
  const now = new Date();
  const weeks = element.dataset.week.split(",").map(Number);
  const hours = element.dataset.hours.split(",").map(Number);
  
  const openWeek = weeks.indexOf(now.getDay()) !== -1;
  const openHour = now.getHours() >= hours[0] && now.getHours() < hours[1];
  
  if(openWeek && openHour) {
    element.classList.add("active");
  }  
}