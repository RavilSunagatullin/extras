# Запуск

Использовал пакет telegraph для laravel (ngrok -> proxy)

1. Для запуска нужно устоновить ngrok 

    windows choco install ngrok

    macos brew install ngrok/ngrok/ngrok

2. Создать токен (берется с сайта https://dashboard.ngrok.com/get-started/your-authtoken)

    ngrok config add-authtoken [token]

3. Поднять локальный сервер

    php artisan serve

4. Создать прокси и webhooks

    ngrok http 8000

    4.1. полученный урл обновить в env (APP_URL)

    php artisan telegraph:set-webhook

    php artisan RegisterCommands

и все должно работать 👍

ссылка на bot`a: t.me/Laravel_tg_bot

# Admin panel

email admin@admin

password 12345678

# P.S 
подключенная бд sqlite, env настраивать ничего в этом плане не надо 

Добавление и изменение я делать умею, но придумать так чтоб это работало и бот отправлял сообщения не получилось

А также я не придумал как отследить вкл и выкл бота(

Все остальное по тз