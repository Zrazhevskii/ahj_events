const goblin = Array.from(document.querySelectorAll(".game-box"));
const len = goblin.length;
const numr = () => Math.floor(Math.random() * len);
const wins = document.querySelector(".status__wins");
const loss = document.querySelector(".status__loss");
const stat = document.querySelector(".stat");
const info = document.querySelector(".info");

function game() {
  goblin.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      if (stat.textContent == 1) {
        info.classList.add("win");
        info.textContent = "Вы выиграли!!!";
        reset();
      }
      if (item.className === "game-box goblin") {
        ++wins.textContent;
        --stat.textContent;
      } else {
        if (loss.textContent == 4) {
          info.classList.add("win");
          info.textContent = "Вы проиграли(((";
          reset();
        }
        ++loss.textContent;
      }
    });
  });
}

function reset() {
  setTimeout(() => {
    info.textContent = "Долбани гоблина!";
    wins.textContent = 0;
    loss.textContent = 0;
    stat.textContent = 5;
    info.classList.remove("win");
  }, 2000);
}

setInterval(jump, 1000);

function jump() {
  goblin.forEach((item) => {
    if (item.className === "game-box goblin") {
      item.classList.remove("goblin");
    }
  });
  goblin[numr()].classList.add("goblin");
}

game();
