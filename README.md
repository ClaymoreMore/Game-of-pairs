// Что нужно сделать
// Вам предстоит разработать простую игру в пары. Вы могли с ней сталкиваться в настольных и видеоиграх. Игрок видит квадратное поле из карточек, расположенных рубашкой вверх, и находит пары, открывая карточки в произвольном порядке. На открытых карточках могут быть картинки, буквы, цифры, пиктограммы. Игрок открывает сначала одну карточку, затем вторую. Если открытые карточки одинаковы, они остаются открытыми до конца партии. В противном случае они переворачиваются обратно.

// Начальное состояние игры при открытии в браузере. На странице с помощью HTML-элементов выводится поле 4 × 4 из квадратных карточек. Каждая карточка содержит цифру от 1 до 8. Пользователь не видит цифры — карточки расположены рубашкой вверх. На поле строго по две карточки с одинаковой цифрой, чтобы они могли образовать пару. Карточки расположены в случайном порядке.

// Ход игры. Игрок может нажать на любую карточку. После нажатия карточка открывается — появляется цифра (карточка переворачивается). Далее игрок может открыть вторую карточку. Если открытые карточки содержат одинаковую цифру, они остаются открытыми до конца игры. Если вторая карточка содержит отличную от первой цифру, обе карточки закрываются, как только игрок откроет новую карточку. На поле остаются открытыми только найденные пары и 1-2 карточки, которые открывает игрок.

// Конец игры. Как только игрок открыл все пары на поле, игра считается завершённой. Под полем с открытыми карточками появляется кнопка «Сыграть ещё раз», при нажатии на которую игра сбрасывается до начального состояния с заново перемешанными карточками.


// Советы и рекомендации
// В задании нет определённых требований к выбору HTML-элементов или стилю оформления задания, но это не значит, что этому не нужно уделять внимания, — игра должна оставаться удобной для игрока. Вы можете самостоятельно написать стили для игры или взять готовые UI-библиотеки вроде Bootstrap.
// Используйте отладчик, он поможет сэкономить время при поиске ошибок и недочётов в программе.
// Задание может показаться большим и сложным. Постарайтесь разбить его на несколько понятных этапов, и всё, скорее всего, окажется проще, чем вы думали:
// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].

// Этап 2. Создайте функцию перемешивания массива. Функция принимает в аргументе исходный массив и возвращает перемешанный.

// Надёжно перемешать массив можно с помощью алгоритма Фишера — Йетса (Fisher — Yates). Готовый код алгоритма на JavaScript можно найти в интернете.

// Этап 3. Используйте функции из этапов 1 и 2 для создания массива с перемешанными номерами.

// Этап 4. На основе массива создайте DOM-элементы карточек:

// Создайте функцию, которая будет создавать карточку с номером из массива произвольных чисел.
// Добавьте событие клика, в котором будут условия и проверки на совпадение карточек.
// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
