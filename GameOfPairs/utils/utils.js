function createNumbersArray(count) {
  
    const myArray = [];
    let step = 0;
    for (let i = 0; i < count; i++) {
      step++
      myArray.push(step, step);
    }
    return myArray
  }

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

export function paint(element, color) {
  element.style.borderColor = color
}

// export const shuffleArr = shuffle(doubleNumberArray) // remove


export function getNumArray(number) {

  const doubleNumberArray = createNumbersArray(number)

  const shuffleArr = shuffle(doubleNumberArray)

  return shuffleArr

}