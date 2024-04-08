import { Container } from "./components/Container/Container.js";
import { shuffleArr } from "./utils/utils.js";
import * as Card from './components/Card/Card.js';
import { paint } from "./utils/utils.js";
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

//  [1,2,3,6,8,9,4...] 16 


//TODO 
/**
  * css grid > 4 x 4
  * 
  * 
  * eventlistener
  * 
  * local storage  id = 1   id = 2
  * 
  * 
  **/


function cleanUp() {
  let cards = document.getElementsByClassName('card')
  while (cards.length > 0) {
    cards[0].parentNode.removeChild(cards[0]);
  }
}

let greenCard = 0;

// let container = document.createElement('div')
// container.className = 'container'
// document.body.append(container)


(function Game() {
  const container = Container() // return div

  const createCard = Card.New

  //TODO 
  /**
    * generate cards  = shuffleArrayLength
    * 
    * append > container > body
    **/

  // id => 

  // const {1:[1, 1] 2:[2, 3], }

  // []


  //

  let prevCard = null;
  let defaultStyle;
  let cardsList = [];
  let clickedButtons = [];


  shuffleArr.forEach((number, idx) => {
    const newCard = createCard(number);

    container.append(newCard)
    cardsList.push(newCard)

    newCard.addEventListener('click', function () {
      if (clickedButtons.length > 2) {
        return
      }

      const currentCard = this
      const spanCard = this.firstChild

      // spanCard.classList.add('openNumberCard')
      // spanCard.classList.toggle('hidden')
      Card.showNumber(currentCard)
      
      if (prevCard === null) {
        prevCard = currentCard
        clickedButtons.push(currentCard)
      } else {
        clickedButtons.push(currentCard)
        // compare numbers
        // clickedButtons.push(currentCard)
        if (prevCard === currentCard) {
          spanCard.classList.add('hidden')
          spanCard.classList.toggle('openNumberCard')
          prevCard = null
        } else {
          if (prevCard.firstChild.id === spanCard.id) {
          prevCard.classList.add('winCard')
          currentCard.classList.add('winCard')
          prevCard.classList.remove('card')
          currentCard.classList.remove('card')
          prevCard.disabled = true
          currentCard.disabled = true
          prevCard = null
        }
        else {
          spanCard.classList.toggle('hidden')
          prevCard.firstChild.classList.toggle('hidden')
          let cards = document.getElementsByClassName('card') // [but,but,but...] -> [0],[1].. -> disabled
          for (let card of cards) {
            card.disabled = true
          }                             // в данном цикле происходит перебор buttons и отключение интерфейса у каждой кнопки по порядку

          setTimeout(() => {
            spanCard.classList.toggle('openNumberCard')
            prevCard.firstChild.classList.toggle('openNumberCard')
            for (let card of cards) {
              card.disabled = false
            }
            prevCard = null
          }, 1_000)
        }}

        clickedButtons = [];

      }

    }
    )
  })

  document.body.append(container)

  setTimeout(() => {
    cardsList.forEach((card) => {
      Card.hideNumber(card)
    })
  }, 5000)

  setTimeout(() => {
    let cards = document.getElementsByClassName('card')
    for (let card of cards) {
      card.disabled = true
    }
    alert('Игра окончена')
  }, 100000)
})() //IIFE


function startGame(count) {
  // let previousButton = null;
  // let defaultStyle

  for (let i = 0; i < count.length; i++) {
    // let card = document.createElement('button')
    // let string = document.createElement('string')
    // card.className = 'card'
    // card.id = 'div'
    // string.className = 'string'
    // string.id = 'str'
    // string.textContent = count[i]
    // container.appendChild(card)
    // cards = container.children
    // card.appendChild(string)
    // defaultStyle = card.style

    card.addEventListener('click', () => {
      string.style.display = 'inline';

      let previousButton = null;
      let defaultStyle;
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
      greenCard += 2
      console.log(greenCard) //осуществляю проверку работы счетчика для показа кнопки под конец игры
      previousButton.disabled = true
      card.disabled = true
      previousButton = null
      
    })
  }

  setTimeout(() => {
    let buttons = document.getElementsByClassName('card')
    for (button of buttons) {
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



// startGame(shuffleArr) 
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