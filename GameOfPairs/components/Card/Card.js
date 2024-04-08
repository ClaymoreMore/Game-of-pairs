export function Card(number) {
    const card = document.createElement('button')

  
    const string = document.createElement('span')
  
    card.className = 'card'
    card.id = number
  
    string.className = 'openNumberCard'
    string.id = number

    // data-card-num
  
    string.textContent = number
    // container.appendChild(card)
  
    // cards = container.children
    card.appendChild(string)
  
    // defaultStyle = card.style

    return card
}

// перенести в ./helpers/ с одноименными названиями

export function showNumber(card) {
    card.firstChild.classList.remove('hidden')
    card.firstChild.classList.add('openNumberCard')
}

export function hideNumber(card) {
    card.firstChild.classList.remove('openNumberCard')
    card.firstChild.classList.add('hidden')
}



