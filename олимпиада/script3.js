// команда запуска в терминал
// clear; node script3.js
// создание интрефейса считывающий значения в терминале
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getInput(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}
// основная программа
async function main() {
    // обработчик ошибок
    try {
        // вводим значение n
        let index = await getInput("Введите n <= 6 для матрицы: ");
        // останавливаем ввод
        rl.close();
        // создаем матрицу
        let matrix = [];
        // заполняем матрицу
        for (let i = 0; i < index; i++) {
            // создаем строку матрицы
            let matrixElem = [];
            // заполняем строку матрицы
            for (let j = 0; j < index; j++) {
                // добавляем в строку случайный элемент от -30 до 30
                matrixElem.push(getRandom(-30, 30));
            }
            // добавляем в матрицу строку
            matrix.push(matrixElem);
        }
        // показываем матрицу
        showMatrix(matrix, "Изначальная матрица: ");
        // показываем ответ
        showMatrix(task3(matrix),"Ответ: ")
    } catch (err) {
        console.error("Произошла ошибка:", err);
    }
}

function task3(matrix) {
    // создаем макисмальную переменную
    let max = -40;
    let isLessZero;
    // ищем её
    matrix.forEach((elem) => {
        elem.forEach((item) => {
            isLessZero = item<0?true:false;
            return Math.abs(item) > max ? (max =  Math.abs(item)) : item;
        });
    });
    // переменный координаты
    let row = null;
    let column = null;
    // ищем координаты для max
    row = matrix.findIndex((elem) => {
        let x = elem.findIndex((item) => {
            return Math.abs(item) === max;
        });
        if (x != -1) {
            column = x;
            return true;
        }
    });
    // удаляем строку с координатой row
    matrix.splice(row, 1);
    // удаляем столбец с координатой column
    matrix.forEach((item) => {
        item.splice(column, 1);
    });
    // вспомогательная инф
    if(isLessZero){
        console.log(`Mаксимальный элемент: |-${max}|, Координаты ${column+1}, ${row+1}`);
    }else{
        console.log(`Mаксимальный элемент: |${max}|, Координаты ${column+1}, ${row+1}`);
    }
    // возвращаем матрицу
    return matrix;
}
// случайное число
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function showMatrix(matrix, text){
    console.log(text);
    matrix.forEach((item) => {
        console.log(`| ${item.join(" ")} |`)
    })
}

main();
