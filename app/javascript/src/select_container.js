export default class SelectContainer {
  constructor() {
    let panelSelector = '[data-perform="panel-refresh"]';
    let refreshEvent = 'panel-refresh';
    let csspinnerClass = 'csspinner';

    console.log("lenght", document.querySelectorAll(panelSelector).length)
    Array.prototype.forEach.call(document.querySelectorAll(panelSelector), function (element, index) {
      console.log(element);
      console.log(index);
    })
    Array.prototype.forEach.call(document.querySelectorAll('.container'), function (element, index) {
      console.log(element);
      console.log(index);
    })
  }
}