function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const inputNum = controls.querySelector('#input');
const create = controls.querySelector('#create');
const destroy = controls.querySelector('#destroy');
const boxes = document.querySelector('#boxes');
const destroyBoxes = event => {
  boxes.innerHTML = '';
};

create.addEventListener('click', function () {
  let numberOfDivs = inputNum.value;

  if (numberOfDivs <= 100 && numberOfDivs > 0) {
    destroyBoxes();
    const elements = [];
    for (let i = 0; i < numberOfDivs; i++) {
      let elHeight = `${30 + i * 10}px`;
      let elWidth = `${30 + i * 10}px`;
      const element = `<div style="width: ${elWidth}; height: ${elHeight}; background-color: ${getRandomHexColor()}; margin: 2px"></div>`;
      elements.push(element);
    }
    boxes.insertAdjacentHTML('beforeend', elements.join(''));
  }
});

destroy.addEventListener('click', destroyBoxes);
