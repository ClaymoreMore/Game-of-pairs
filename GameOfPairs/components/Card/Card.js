export function Card(number) {
    const card = document.createElement('button')

  
    const string = document.createElement('span')
  
    card.className = 'card'
    card.id = number
  
    string.className = 'hidden'
    string.id = number

    // data-card-num
  
    string.textContent = number
    // container.appendChild(card)
  
    // cards = container.children
    card.appendChild(string)
  
    // defaultStyle = card.style

    return card
}