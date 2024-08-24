const Myphoto = document.getElementById("myphoto");
const BeforeButton = document.getElementById("beforeImg");
const AfterButton = document.getElementById("afterImg");
const Img = ["deer.JPEG", "HU.jpg", "sakurajima.JPEG", "simohuri.jpg"];
/*
const ImgExp = [{Img:"deer.JPEG", Exp:"これは"}]
*/
let CurrentImg = Img[0];
let n = 0;

const nextImg = function (n) {
  CurrentImg = Img[n + 1];
  Myphoto.src = CurrentImg;
};

const beforeImg = function (n) {
  CurrentImg = Img[n - 1];
  Myphoto.src = CurrentImg;
};

AfterButton.onclick = function () {
  if (n === 0) {
    nextImg(0);
    n++;
  } else if (n === 1) {
    nextImg(1);
    n++;
  } else if (n === 2) {
    nextImg(2);
    n++;
  }
};

BeforeButton.onclick = function () {
  if (n === 1) {
    beforeImg(1);
    n--;
  } else if (n === 2) {
    beforeImg(2);
    n--;
  } else if (n === 3) {
    beforeImg(3);
    n--;
  }
};
