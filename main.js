const Myphoto = document.getElementById("myphoto");
const BeforeButton = document.getElementById("beforeImg");
const AfterButton = document.getElementById("afterImg");
const Img = ["deer.JPEG", "HU.jpg", "sakurajima.JPEG", "simohuri.jpg"];

let CurrentImg = Img[0];
let n = 0;

const nextImg = function (n) {
  CurrentImg = Img[n + 1];
  Myphoto.src = CurrentImg;
  n++;
  return n;
};

const beforeImg = function (n) {
  CurrentImg = Img[n - 1];
  Myphoto.src = CurrentImg;
  n--;
  return n;
};

AfterButton.onclick = function () {
  if (n === 0) {
    n = nextImg(0);
  } else if (n === 1) {
    n = nextImg(1);
  } else if (n === 2) {
    n = nextImg(2);
  }
};

BeforeButton.onclick = function () {
  if (n === 1) {
    n = beforeImg(1);
  } else if (n === 2) {
    n = beforeImg(2);
  } else if (n === 3) {
    n = beforeImg(3);
  }
};
