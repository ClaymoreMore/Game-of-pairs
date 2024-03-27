export function Card(number) {
    const card = document.createElement('button')
    const string = document.createElement('string')
  
    card.className = 'card'
    card.id = 'div'
  
    string.className = 'string'
    string.id = 'str'
  
    string.textContent = number
    // container.appendChild(card)
  
    // cards = container.children
    card.appendChild(string)
  
    // defaultStyle = card.style
  

    
    return card
}