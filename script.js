const front = 'card-front'
const back = 'card-back'
const CARD = 'card'

startGame()

function startGame() {
  initializeCard(game.createCardFromStickers())
}

function initializeCard(cards) {
  let gameBoard = document.getElementById('gameBoard')

  game.cards.forEach(card => {
    let cardElement = document.createElement('div')
    cardElement.id = card.id
    cardElement.classList.add(CARD)
    cardElement.dataset.icon = card.icon

    createCardContent(card, cardElement)

    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement)
  })
}

function createCardContent(card, cardElement) {
  createCardFace(front, card, cardElement)
  createCardFace(back, card, cardElement)
}

function createCardFace(face, card, element) {
  let cardElementFace = document.createElement('div')
  cardElementFace.classList.add(face)

  if (face === front) {
    let iconElement = document.createElement('img')
    iconElement.src = './assets/' + card.icon + '.png'
    cardElementFace.appendChild(iconElement)
  } else {
    let iconCard = document.createElement('img')
    iconCard.src = './assets/card.png'
    cardElementFace.appendChild(iconCard)
  }

  element.appendChild(cardElementFace)
}

function flipCard() {
  this.classList.add('flip')
}
