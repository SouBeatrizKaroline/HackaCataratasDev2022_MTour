const barquinho = document.querySelector(".barquinho");
const mboi = document.querySelector(".mboi");

const jump = () => {
  barquinho.classList.add("jump");
  setTimeout(() => {
    barquinho.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const mboiPosition = mboi.offsetLeft;
  const barquinhoPosition = +window
    .getComputedStyle(barquinho)
    .bottom.replace("px", "");

  if (mboiPosition <= 120 && mboiPosition > 0 && barquinhoPosition < 80) {
    mboi.style.animation = "none";
    mboi.style.left = `${mboiPosition}px`;

    barquinho.style.animation = "none";
    barquinho.style.left = `${barquinhoPosition}px`;

    barquinho.src = "./assets/game-over.png";
    barquinho.style.width = "150px";
    barquinho.style.marginLeft = "0";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);