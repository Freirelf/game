let game = {
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
