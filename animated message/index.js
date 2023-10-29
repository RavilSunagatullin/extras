// Вызов кнопки (в вашем коде можно вызвать другую кнопку, поэтому это не нужно)
// Также в данном случае я повесил вызов функции внутрь html, так что в моем случае эта строчка вообще не нужна.
// const mes_btn = document.querySelector('#message')


// Переменная отвечающая за блок, внутри которого будут все анимированные сообщения
let mes_main = document.querySelector('.message-main')

// Функция вызова анимированного сообщения с параметрами:
// 1. Статус (true - Вызов успешного сообщения, false - Вызов сообщения с ошибкой)
// 2. Текст самого анимированного сообщения
// 3. Текст объявления Ошибки/Успеха сообщения (То есть оглавление самого сообщения, по типу "Успешно!" или "Ошибка!")
function alertbox(statement, message, state_text){
    // Вызов сообщения в случае успеха (если параметр statement является true)
    if(statement){
        // Создание блока div с классом class="message-box success"
        let alert_success = document.createElement('div')
        alert_success.className = "message-box success"
        // Далее внутри этого блока распологается данный HTML-код
        alert_success.innerHTML = `
            <h2 class="message-statement">${state_text}</h2>
            <h3 class="message-value">${message}</h3>
        `
        // Появление блока message-box со всеми дочерними блоками внутри
        mes_main.appendChild(alert_success)

        // Таймер исчезновения этого блока (В данном случае блок исчезнет через 4 секунды, можно настроить под себя, главное в коде CSS поменять время анимации индикатора сообщения)
        setTimeout(() => {
            alert_success.remove()
        }, 4000)
    } else {
        // Вызов сообщения в случае успеха (если параметр statement является false)

        // Создание блока div с классом class="message-box invalid"
        let alert_invalid = document.createElement('div')
        alert_invalid.className = "message-box invalid"
        // Далее внутри этого блока распологается данный HTML-код
        alert_invalid.innerHTML = `
            <h2 class="message-statement">${state_text}</h2>
            <h3 class="message-value">${message}</h3>
        `

        // Появление блока message-box со всеми дочерними блоками внутри
        mes_main.appendChild(alert_invalid)

        // Таймер исчезновения этого блока (В данном случае блок исчезнет через 4 секунды, можно настроить под себя, главное в коде CSS поменять время анимации индикатора сообщения)
        setTimeout(() => {
            alert_invalid.remove()
        }, 4000)
    }
}