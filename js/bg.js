const container = document.querySelector(".container");

const IMG_NUMBER = 17;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/photo (${imgNumber + 1}).jpg`;
  image.classList.add("bgImage");
  container.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
