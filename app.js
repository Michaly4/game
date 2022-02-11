function isNumber(arg) {
   return !isNaN(parseFloat(arg)) && isFinite(arg) && arg != " ";
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function game() {
let counter = 10;
   function istNummerGame(prm) {
      //console.log(prm);
      ask = prompt("Угадай число от 1 до 100");
      if (ask === null) {
         alert("Игра окончена");
         counter--;
      } else if (counter == 0) {
         if (confirm("Попытки закончились, хотите сыграть еще?")) {
            game();
         } else {
            alert("Тогда всего хорошего!🖖🏻")
         }
      } else if (!isNumber(ask)) {
         alert("Введи число!");
         counter--;
         istNummerGame(getRandomInt(100));
      } else if (ask <= 0) {
         alert("Введи число от 1 до 100 😊 ");
         game();
      } else if (ask < prm) {
         alert("Загаданное число меньше");
         alert(`Пробуй дальше ещё ❗️${counter}❗️ попыток!`);
         counter--;
         istNummerGame(getRandomInt(100));
      } else if (ask > prm) {
         alert("Загаданное число больше");
         alert(`Пробуй дальше ещё ❗️${counter}❗️  попыток!`);
         counter--;
         istNummerGame(getRandomInt(100));
      } else if (ask == prm) {
         alert("Поздравляю,Вы угадали!!!🏆");
         if (confirm("Хотели бы сыграть еще?")) {
            game();
         } else {
            alert("Тогда всего хорошего!🖖🏻")
         }
      }
   }
   istNummerGame(getRandomInt(100));
}
game();
//+++++++++++++++++++++++++++++++++++++++++++++++++++