# Домашнее задание курса Node.js (3 и 4)

## В проекте есть следующие скрипты:

Запуск приложения в режиме production

```bash
    npm start
```

Запуск приложения в режиме разработки

```bash
    npm run start:dev
```

Выполнить форматирование кода

```bash
    npm run prettier
```

Выполнить проверку кода с помощью Eslint

```bash
    npm run lint
```

Выполнить проверку кода с помощью Eslint и автоисправлением ошибок

```bash
    npm run lint:fix
```

## Проект состоит из трех маршрутов

- `/` - основной лендинг
- `/login` - форма входа в админ панель
- `/admin` - админ панель

## Необходимо реализовать

### На главной странице

---

POST запрос URL: `/`
Отправляет на сервер поля

```
    {
      email,
      password
    }
```

Отправить письмо от пользователя.
Также на главной странице изменить вывод скиллов и товаров, в соответствующих блоках, из базы данных. То есть если добавлен товар он должен появиться в выдаче на главной странице. Если в административной панели изменили значения скиллов они должны измениться и на главной странице.

### На странице login

---

POST запрос URL: `/login`
Отправляет на сервер поля

```
    {
      email,
      password
    }
```

Это форма входа в админ панель. Если email и пароль совпадают с сохраненным, то пропускаем на страницу admin, иначе не пускаем с сообщением почему.

### На странице admin

---

POST запрос URL: `/admin/upload`

Отправляется FormData объект на сервер с картинкой товара и описанием. Сохраняем картинку товара и его описание в базе данных

```
    в поле photo - Картинка товара
    в поле name - Название товара
    в поле price - Цена товара
```

---

POST запрос URL = `/admin/skills`

Отправляется объект с полями на сервер со значением скиллов. Скиллы обновляют свои значения в базе данных

```
    {
        age - 'Возраст начала занятий на скрипке'
        concerts - 'Концертов отыграл'
        cities - 'Максимальное число городов в туре'
        years - 'Лет на сцене в качестве скрипача'
    }
```

##### Домашние задание №3 - реализовать серверную часть на [Express.js](http://expressjs.com/ru/)

##### Бонусная домашняя работа №4 - реализовать серверную часть на [Koa.js](http://koajs.com/)

В качестве базы данных данные хранить на сервере в JSON файле, можно использовать пакет [nconf](https://www.npmjs.com/package/nconf) или [LowDB](https://github.com/typicode/lowdb) на свое усмотрение

## P.S.

- JS не используется для отправки форм, все выполняется нативно браузером. Хотите пишите самостоятельно клиентский код
- Для ответов с сервера есть поле `.status`в каждой форме. Чтобы туда отправлять ответы от сервера используйте пакет [connect-flash](https://www.npmjs.com/package/connect-flash)
- проект можно немного изменять под себя
