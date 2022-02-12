function isNumber(arg) {
   return !isNaN(parseFloat(arg)) && isFinite(arg) && arg != " ";
}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function game() {
   let randomNumber = 55;
   let messege = prompt("Угадай число от 1 до 100");

   function isNumberGame(arg) {
      
      if (messege === null) {
         alert("Игра окончена");
      } else if (!isNumber(messege) || messege !== messege.trim()) {
         alert("Введи число!");
         game();
      } else if (messege > arg) {
         alert("Загаданное число меньше");
         alert("Введите новое число");
         game();
      } else if (messege < arg) {
         alert("Загаданное число больше");
         alert("Введите новое число");
         game();
      } else if (messege == arg) {
         alert("Поздравляю,Вы угадали!!!🏆");
      }
   }
   isNumberGame(randomNumber);
}
game();

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Второй вариант
/* 
function game() {
   let isTargetNummer = getRandomInt(100);
   let ask = prompt("Угадай число от 1 до 100");
   let counter = 10;

   function istNummerGame(arg) {
      let ask2;
      if (ask === null) {
         alert("Игра окончена");
      } else if (counter == 0) {
         if (confirm("Попытки закончились, хотите сыграть еще?")) {
            game();
         } else {
            alert("Тогда всего хорошего!🖖🏻")
         }
      } else if (!isNumber(ask) || ask !== ask.trim()) {
         alert("Введи число!");
         game();
      } else if (ask > 100) {
         alert("Введи число от 1 до 100 😊 ");
         game();
      } else if (ask > arg) {
         alert("Загаданное число меньше");
         alert(`Пробуй дальше ещё *${counter}* попыток!`);
         counter--;
         ask2 = prompt("Угадай число от 1 до 100");
         ask = ask2;
         istNummerGame(isTargetNummer);
      } else if (ask < arg) {
         alert("Загаданное число больше");
         alert(`Пробуй дальше ещё *${counter}* попыток!`);
         counter--;
         ask2 = prompt("Угадай число от 1 до 100");
         ask = ask2;
         istNummerGame(isTargetNummer);
      } else if (ask == arg) {
         alert("Поздравляю,Вы угадали!!!🏆");
         if (confirm("Хотели бы сыграть еще?")) {
            game();
         } else {
            alert("Тогда всего хорошего!🖖🏻")
         }
      }
   }
   istNummerGame(isTargetNummer);
}
game();
*/