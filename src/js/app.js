const goblin = Array.from(document.querySelectorAll(".game-box"));
const len = goblin.length;
const numr = () => Math.floor(Math.random() * len);
const wins = document.querySelector(".status__wins");
const loss = document.querySelector(".status__loss");
const stat = document.querySelector(".stat");
const info = document.querySelector(".info");

function userClick() {
    goblin.forEach((item) => {
        item.addEventListener('click', (evt) => {
          if (evt.target.classList.contains('goblin')) {
            item.classList.remove('goblin');
              ++wins.textContent;
              --stat.textContent;
              item.classList.add('boom');
              setTimeout(() => item.classList.remove('boom'), 500);
              if (wins.textContent == 5) {
                info.classList.add('win');
                info.textContent = 'Вы выиграли!!!';
                reset();
            }
          } else {
              ++loss.textContent;
              if (loss.textContent == 5) {
                  info.classList.add('win');
                  info.textContent = 'Вы проиграли(((';
                  reset();
              }
          }
          interval()
        });
    });
}

function reset() {
    setTimeout(() => {
        info.textContent = 'Долбани гоблина!';
        wins.textContent = 0;
        loss.textContent = 0;
        stat.textContent = 5;
        info.classList.remove('win');
    }, 2000);
}

const interval = setInterval(jump, 1000);

function jump() {
    goblin.forEach((item) => {
        if (item.className === 'game-box goblin') {
            item.classList.remove('goblin');
        }
    });
    goblin[numr()].classList.add('goblin');
}

userClick();
