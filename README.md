Проект "Мир Котиков"
Добро пожаловать в Мир Котиков - место, полное очаровательных котячих картинок! Этот проект представляет собой простое веб-приложение на React, которое позволяет пользователям просматривать и взаимодействовать с коллекцией котячих карточек. Пользователи могут ставить лайки или дизлайки картам, удалять их и даже фильтровать отображение, чтобы показать только понравившиеся карты.

Начало работы
Клонировать репозиторий: git clone https://github.com/DinaraMi/doctor24.git
Установить зависимости: npm install
Запустить приложение: npm start

Открыть в браузере:
Откройте браузер и перейдите по адресу http://localhost:3000, чтобы посмотреть Мир Котиков.

Структура проекта
src/components: Содержит компоненты React, такие как App, Card и Filter.
src/images: Содержит изображения, используемые в проекте.
src/utils: Включает в себя вспомогательные функции, действия и файл API.
src/reducers: Содержит редукторы Redux для управления состоянием.
public: Общедоступные ресурсы и HTML-файл.

Возможности
Загрузка карточек:
Карточки загружаются из внешнего API с использованием утилитарной функции fetchData.
Поставить лайк или дизлайк карточке:
Пользователи могут выражать свое предпочтение к котячим карточкам, ставя лайки или дизлайки.
Лайкнутые карточки хранятся в состоянии Redux с использованием редуктора likedCardsReducer.
Удаление карточки:
Пользователи могут удалить котячую карточку из коллекции.
Для обновления состояния диспетчеризуется действие deleteCard.
Фильтрация лайкнутых карточек:
Компонент Filter позволяет пользователям переключаться между отображением всех карточек и отображением только лайкнутых.
Состояние управляется с использованием редуктора showLikedOnlyReducer.
