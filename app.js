const cardArray = [
  {
    name: 'fries',
    img: 'images/french-fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hot-dog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/french-fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hot-dog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardsChosenIds = []
const cardsWon = []


function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/square.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.append(card)

  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  console.log(cards)
  console.log('check for Match')
  if (optionOneId == optionTwoId){
    alert('You found a match!')
  }

  if (cardChosen[0] == cardChosen[1]) {
    alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'images/square.png');
    cards[optionTwoId].setAttribute('src', 'images/square.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/square.png');
    cards[optionTwoId].setAttribute('src', 'images/square.png');
    alert('Sorry! Try again!');
  }
  
  resultDisplay.textContent = cardsWon.length;
  cardChosen = []; // Fix variable name here
  cardsChosenIds = [];
  
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations! You found them all';
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log(cardChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardChosen.length === 2){
    setTimeout( checkMatch, 500)
  }
}