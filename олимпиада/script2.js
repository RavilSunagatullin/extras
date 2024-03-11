// команда запуска в терминал
// clear; node script2.js
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
        // останавливаем ввод
        rl.close();
        // ввыводим ответ
        console.log(`Ответ: ${task2(startString)}`);
    } catch (err) {
        console.error("Произошла ошибка:", err);
    }
}

function task2(str) {
    // перобразуем строку в массив слов
    let words = str.split(" ");
    // проверка по условию
    if (words.length > 1 && !(words.lenght % 2)) {
        // удаляем 1 слово, разворачиваем и объединяем массив в строку
        return words.slice(1).reverse().join(" ");
    }
    // ничего не делаем
    return str;
}

main();
