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


// Browser API
// submit
// event submit form
// function eventFn () {}
// eventFn({target: .... })

//....
// event => eventFn({  ....  })

const form = document.getElementById('form')
let gameTimer;
let clearCardTimer;

form.addEventListener('submit', (event) => {
  const prevContainer = document.getElementById('container')

  event.preventDefault()

  const formData = new FormData(event.target);
  const numberCard = formData.get("numCards")

  const numberArr = getNumArray(numberCard)

  console.log(`/GameOfPairs/main.js - line: 54 ->> prevContainer`, prevContainer)

  if (prevContainer) {
    prevContainer.remove()
  }

  if (gameTimer) {
    clearTimeout(gameTimer)
  }

  if (clearCardTimer) {
    clearTimeout(clearCardTimer)
  }

  Game(numberArr)
})

function Game(cardArray) {
  const container = Container() // return div

  const createCard = Card

  let prevCard = null;
  let cardsList = [];
  let clickedButtons = [];
  const winCards = [];

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
            winCards.push(spanCard.id)
            prevCard.classList.add('winCard')
            currentCard.classList.add('winCard')
            prevCard.classList.remove('card')
            currentCard.classList.remove('card')
            
            prevCard.disabled = true
            currentCard.disabled = true
            
            //TODO
            /**
              * if wincards.length * 2 === cardArray.length
              * 
              * 
              * promt('you win') ok
              * cancel / ok
              * 
              * ok => delete prev ''
              * 
              * cancel  => null
              * 
              **/

            if (winCards.length * 2 === cardArray.length) {
              const endGameConfirm = confirm('Вы победили. Начать новую игру?')

              console.log(`/GameOfPairs/main.js - line: 131 ->> endGamePrompt`, endGameConfirm)

              if (endGameConfirm) {
                container.remove()
                
              }
            }

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
            }, 1_000) // clean this !
          }
        }

        clickedButtons = [];

      }

    }
    )
  })

  document.body.append(container)

  clearCardTimer = setTimeout(() => {
    cardsList.forEach((card) => {
      hideNumber(card)
    })
  }, 5_000)

  gameTimer = setTimeout(() => {
    let cards = document.getElementsByClassName('card')
    for (let card of cards) {
      card.disabled = true
    }
    alert('Игра окончена')
  }, 120_000)
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