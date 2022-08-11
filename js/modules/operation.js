export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationData() {
    this.weeks = this.operation.dataset.week.split(',').map(Number);
    this.hours = this.operation.dataset.hours.split(',').map(Number);
  }

  operationNow() {
    this.now = new Date();
    this.dayNow = this.now.getDay();
    this.hourNow = this.now.getUTCHours() - 3;
  }

  open() {
    const openWeek = this.weeks.indexOf(this.dayNow) !== -1;
    const openHour = this.hourNow >= this.hours[0] && this.hourNow < this.hours[1];
    return openWeek && openHour;
  }

  activeOpen() {
    if (this.open()) this.operation.classList.add(this.activeClass);
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.operationNow();
      this.activeOpen();
    }
    return this;
  }
}
