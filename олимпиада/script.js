// команда запуска в терминал
// clear; node script.js
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
        // вводим значение строки
        let startString = await getInput("Введите значение строки: ");
        // вводим отсчет с элемента и длинну
        let lenght = await getInput("Введите длинну строки: ");
        let startIndex = await getInput("Введите отсчет с элемента: ");
        // останавливаем ввод
        rl.close();
        // ввыводим ответ
        console.log(`Ответ: ${task1(startString, startIndex, lenght)}`);
    } catch (err) {
        console.error("Произошла ошибка:", err);
    }
}

// функция выполняющая 1 задание
function task1(str, start, end) {
    // проверка по условию
    if (str.length <= end || !(Number(start + end) >= str.length)) {
        console.error("Длинна подстроки больше строки");
        return null;
    }
    // возращаем значение подстроки
    return str.slice(start, Number(end) + Number(start));
}
main();
