const signsArr = ["/", "*", "-", "+"];
const anyFunctions = ["%", "с", "a/c"];
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const input = document.querySelector("#input");

const buttons = document.querySelectorAll(".button").forEach(function (item) {
  item.onclick = function (el) {
    let count = input.value.length;
    singFirstСondition =
      signsArr.includes(input.value[count - 1]) &
      signsArr.includes(el.target.value);
    singSecondCondition = !signsArr.includes(input.value[0]) & (count == 0);
    if (numbersArr.includes(el.target.value)) {
      return numFunc(el.target.value);
    }
    if (el.target.value == "=") {
      return equalsFunc(el.target.value);
    }
    if (anyFunctions.includes(el.target.value)) {
      return anyFunc(el.target.value);
    }
    if (singFirstСondition | singSecondCondition) {
      return;
    }
    if (signsArr.includes(el.target.value)) {
      return signsFunc(el.target.value);
    }
  };
});
function signsFunc(num) {
  input.value = input.value + num;
}
function anyFunc(num) {
  if (num === "с") {
    return (input.value = input.value.slice(0, -1));
  }
  if (num === "a/c") {
    return (input.value = "");
  }
  if (num === "%") {
    let preResult = input.value.replace(/[A-Z]/gi, "");
    preResult = preResult.replace(/[А-Я]/gi, "");
    let result = eval(preResult);
    result = result * 0.01;
    input.value = result;
  }
}
function numFunc(num) {
  input.value = input.value + num;
}
function equalsFunc(num) {
  let preResult = input.value.replace(/[A-Z]/gi, "");
  preResult = preResult.replace(/[А-Я]/gi, "");
  let result = eval(preResult);
  // округление до 4 цифр
  // исправление ошибок
  createHistory(`${preResult} = ${result}`);
  input.value = result;
}

// массив с номерами из истории
// пробегаемся по массиву
// и сохранем:
// localStorage.setItem(array, JSON.stringify(array))
// array = JSON.parse(localStorage.getItem("array"))
// сама история это строки
const lists = document.querySelector(".lists");
// function getData() {
//   let today = new Date();
//   let hour = today.getHours();
//   let minutes = today.getMinutes();
//   let day = today.getDay();
//   let mounth = today.getMonth();
//   let year = today.getFullYear();
//   let seconds = today.getSeconds();
//   if (hour < 10) {
//     hour.toString();
//     hour = "0" + hour;
//   }
//   if (minutes < 10) {
//     minutes.toString();
//     minutes = "0" + minutes;
//   }
//   if (mounth < 10) {
//     mounth.toString();
//     mounth = "0" + mounth;
//   }
//   if (day < 10) {
//     day.toString();
//     day = "0" + day;
//   }
//   return hour, minutes, day, mounth, year, seconds
// }

function createHistory(item) {
  let historyItem = document.createElement("li");
  historyItem.setAttribute("class", "item");
//   historyItem.textContent = `${item}, ${hour}:${minutes}:${seconds}, ${year}.${mounth}.${day}`;
  //   historyItem.textContent = `${item}, ${utcDateOne}`;
//   lists.append(historyItem);
}
// const items = document.querySelectorAll(".item").forEach(function (item) {
//   item.onclick = function () {
//     item.remove();
//   };
// });
