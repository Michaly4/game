function isNumber(arg) {
   return !isNaN(parseFloat(arg)) && isFinite(arg) && arg != " ";
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function game() {
   //let ask = prompt("Угадай число от 1 до 100");
   let counter = 10;

   function istNummer(prm) {
      console.log(prm);
      ask = prompt("Угадай число от 1 до 100");
      if (ask === null || counter === 0) {
         alert("Игра окончена");
         counter--;
      } else if (!isNumber(ask)) {
         alert("Введи число!");
         counter--;
         istNummer(getRandomInt(100));
      } else if (ask < prm) {
         alert("Загаданное число меньше");
         alert(`Пробуй дальше ещё *${counter}* попыток!`);
         counter--;
         istNummer(getRandomInt(100));
      } else if (ask > prm) {
         alert("Загаданное число больше");
         alert(`Пробуй дальше ещё *${counter}* попыток!`);
         counter--;
         istNummer(getRandomInt(100));
      } else if (ask == prm) {
         alert("Поздравляю, Вы угадали!!!");
      }
   }
   istNummer(getRandomInt(100));
}
game();
//+++++++++++++++++++++++++++++++++++++++++++++++++++