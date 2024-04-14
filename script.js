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

async function main() {
    try {
        const userInput = await getInput("Введите значение переменной: ");
        rl.close();
        console.log("Вы ввели:", userInput);
        let str = userInput;
        console.log(str);
        str = btoa(str);
        console.log("btoa", str);
        str = atob(str);
        console.log("atob", str);
    } catch (err) {
        console.error("Произошла ошибка:", err);
    }
}

main();
