function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const bgcolor = document.querySelector('.color');
const handleClick = () => {
  const randomcolor = getRandomHexColor();
  bgcolor.textContent = randomcolor;
  body.style.backgroundColor = randomcolor;
};

button.addEventListener('click', handleClick);
