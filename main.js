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

function createNumbersArray(count) {
  
    const myArray = [];
    let step = 0;
    for (let i = 0; i < count; i++) {
      step++
      myArray.push(step, step);
    }
    return myArray
  }

  const doubleNumberArray = createNumbersArray(8)

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {

      const j = Math.floor(Math.random() * newArr.length);
    
      const temp = newArr[i]
    
     newArr[i] = newArr[j]
     newArr[j] = temp
    }
    return newArr
}

const shuffleArr = shuffle(doubleNumberArray) 

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.


//TODO
/**
  *
  * shuffle array [...] => dom elements 
  * 
  *   dom elements
  * 
  *   const values = [1, 2]
  *     
  * <div id container >
  *   
  *   for
  *     
  *   add.eventListener    
  * 
  *   append 
  *     <div class="">1</div>
  *     
  *     <div>4<>
  * 
  * 
  **/

function paint(button, color) {
  button.style.backgroundColor = color
}

function cleanUp() {
  let cards = document.getElementsByClassName('card')
  while(cards.length > 0){
    cards[0].parentNode.removeChild(cards[0]);
}
}

let greenCard = 0;

let container = document.createElement('div')
container.className = 'container'
document.body.append(container)
function startGame(count) {
  let previousButton = null;
  let defaultStyle
  for (let i = 0; i < count.length; i++) {
    let card = document.createElement('button')
    let string = document.createElement('string')
    card.className = 'card'
    card.id = 'div'
    string.className = 'string'
    string.id = 'str'
    string.textContent = count[i]
    container.appendChild(card)
    cards = container.children
    card.appendChild(string)
    defaultStyle = card.style
    
    card.addEventListener('click', () => {
      string.style.display = 'inline';
      if (previousButton === null) {
        // ур1 если нет
        previousButton = card
        paint(card, 'gray')
        return
      }
      //ур1 Если кнопка есть
      if (previousButton === card) { //ур2 сначала необходимо сравнить выбранную кнопку с текущей кнопкой:
        //  ур2 если кнопки одинаковы - скидываем до дефолта + сброс previousButton
        card.style = defaultStyle
        string.style.display = 'none';
        previousButton = null 
        return
      }
      
      if (previousButton.textContent !== card.textContent) {
        setTimeout(() => {
          previousButton.style = defaultStyle
          previousButton.firstElementChild.style.display = 'none'
          card.firstElementChild.style.display = 'none'
          previousButton = null 
        }, 1000);
        //string.style.display = 'none';
        return
      } 
      
      paint(card, 'green')
      paint(previousButton, 'green')
      greenCard+=2
      console.log(greenCard) //осуществляю проверку работы счетчика для показа кнопки под конец игры
      previousButton.disabled = true
      card.disabled = true
      previousButton = null
        if(greenCard === 16) {
          greenCard = 0
          let divForBtn = document.createElement('div')
          divForBtn.className = 'btnNewGame'
          document.body.append(divForBtn)
          let btnStart = document.createElement('button')
          btnStart.textContent = 'Начать новую игру'
          divForBtn.append(btnStart)
          btnStart.addEventListener('click', () => {
            cleanUp()
            startGame(shuffleArr)
            clearTimeout(setTimeout)
            btnStart.style.display = "none";
          })
        }
          
      
    })
  }
  setTimeout(() => {
    let buttons = document.getElementsByClassName('card')
    for(button of buttons) {
      button.disabled = true
    }
    alert('Игра окончена')
  }, 30000)

  setTimeout(() => {
    let buttonsString = document.getElementsByClassName('string');
    for (let button of buttonsString) {
      button.style.display = 'none';
    }
  }, 18500);
}



startGame(shuffleArr) 
//Создать кнопку "Начать новую игру" - start game(shuffleArr)

// 1. Клик по кнопке
//2.  Делаем проверку, есть ли в переменной выбранная кнопка: 
//        ур1 если нет - сохраняем выбранную кнопку и красим в серый цвет +
//3.      ур1 Если кнопка есть - необходим ряд проверок далее:
//            ур2 сначала необходимо сравнить выбранную кнопку с текущей кнопкой:
          //  ур2 если кнопки не одинаковы - идем дальше: 
          //      ур3 необходимо сравнить значения выбранных выше кнопок:
          //      ур3 если совпадают - красим в зеленый обе кнопки + сброс previousButton
          //      ур3 если не совпадают - сбросить стиль до дефолта + сброс previousButton
          //  ур2 если кнопки одинаковы - сбросить стиль до дефолта + сброс previousButton
// startGame(shuffleArr)


// 2 состояния:
// 1 - видимые карточки
// 2 - спрятанные карточки