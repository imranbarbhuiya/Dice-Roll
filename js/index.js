var btn, dice1, dice2, random1, random2, win;
btn = document.querySelector('.btn');
dice1 = document.querySelector('#pl1dice');
dice2 = document.querySelector('#pl2dice');
win = document.getElementById('win');
btn.onclick = function() {
  pl1 = document.querySelector('#pl1').innerText;
  pl2 = document.querySelector('#pl2').innerText;
  dice1.classList.remove("show-" + random1);
  dice2.classList.remove("show-" + random2);
  random1 = Math.floor((((Math.random() * 100) * 6) + 500) / 100) - 4;
  dice1.classList.add("show-" + random1);
  random2 = Math.floor((((Math.random() * 100) * 6) + 500) / 100) - 4;
  dice2.classList.add("show-" + random2);
  if (random1 < random2) {
    win.innerText = pl2 + " Wins";
  } else if (random1 > random2) {
    win.innerText = pl1 + " Wins";
  } else {
    win.innerText = "Draw, Retry Again";
  }
  btn.innerText = "Retry";
}
