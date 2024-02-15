let game = {
  lockMode: false,
  firstCard: null,
  secondCard: null,

  stickers: [
    'bat',
    'bath-dog',
    'bee',
    'bird',
    'crocodile',
    'dinosaur',
    'happy',
    'mushroom',
    'racoon',
    'sun'
  ],

  cards: null,

  setCard: function (id) {
    let card = this.cards.find(card => card.id === id)
    console.log(card)

    if (!card || card.flipped || this.lockMode) {
      return false
    }

    if (!this.firstCard) {
      this.firstCard = card
      this.firstCard.flipped = true
      return true
    } else {
      this.secondCard = card
      this.secondCard.flipped = true
      this.lockMode = true
      return true
    }
  },

  checkMatch: function () {
    if (!this.firstCard || !this.secondCard) {
      return false
    }
    return this.firstCard.icon === this.secondCard.icon
  },

  clearCards: function () {
    this.firstCard = null
    this.secondCard = null
    this.lockMode = false
  },

  unflipCards() {
    this.firstCard.flipped = false
    this.secondCard.flipped = false
    this.clearCards()
  },

  checkGameOver() {
    return this.cards.filter(card => !card.flipped).length == 0
  },

  createCardFromStickers: function () {
    this.cards = []

    this.stickers.forEach(sticker => {
      this.cards.push(this.createPairCardFromSticker(sticker))
    })
    this.cards = this.cards.flatMap(pair => pair)
    this.shuffleCards()
    return this.cards
  },

  createPairCardFromSticker: function (sticker) {
    return [
      {
        id: this.createIdFromCardSticker(sticker),
        icon: sticker,
        flipped: false
      },
      {
        id: this.createIdFromCardSticker(sticker),
        icon: sticker,
        flipped: false
      }
    ]
  },

  createIdFromCardSticker: function (sticker) {
    return sticker + parseInt(Math.random() * 1000 + 1)
  },

  shuffleCards: function (cards) {
    let currentIndex = this.cards.length
    let randomIndex = 0

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex]
      ]
    }
  }
}
