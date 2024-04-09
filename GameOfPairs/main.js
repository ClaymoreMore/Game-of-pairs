import { Container } from "./components/Container/Container.js";
import { getNumArray } from "./utils/utils.js";
import { Card, showNumber, hideNumber } from './components/Card/Card.js';

//TODO
/**
  *
  * верстка
  * 
  * form => submit=startGame
  * 
  * 
  *  огрничить числа вводимые значения
  *  
  * 
  * 
  * fn startGame(params) {
  * 
  *  const {1, 2} = params // object 
  * 
  * 
  * 
  *  
  *  shuffleArr( 1 * 2) => [****]
  * 
  * }
  * 
  * Gamee([****])
  * 
  **/



const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const numCards = document.getElementById('numCards')
  const numberCard = numCards.value 
  
  const numberArr = getNumArray(numberCard)
  Game(numberArr)
})

function Game(cardArray) {
  const container = Container() // return div

  const createCard = Card

  let prevCard = null;
  let cardsList = [];
  let clickedButtons = [];


  cardArray.forEach((number) => {
    const newCard = createCard(number);

    container.append(newCard)
    cardsList.push(newCard)

//TODO 
/**
  * вынести хэндлер слушателся в отдельный файл
  * 
  * т/к он отвечает только за логику игры
  * 
  **/

    newCard.addEventListener('click', function () {
      if (clickedButtons.length > 2) {
        return
      }

      const currentCard = this
      const spanCard = this.firstChild

      showNumber(currentCard)
      
      if (prevCard === null) {
        prevCard = currentCard
        clickedButtons.push(currentCard)
      } else {
        clickedButtons.push(currentCard)
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
      hideNumber(card)
    })
  }, 5000)

  setTimeout(() => {
    let cards = document.getElementsByClassName('card')
    for (let card of cards) {
      card.disabled = true
    }
    alert('Игра окончена')
  }, 100000)
}


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