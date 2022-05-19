function getFirstCard(deck) {
  const [first, second, third] = deck;
  return first;
}

function getSecondCard(deck) {
  const [first, second, third] = deck;
  return second;
}

function swapTopTwoCards(deck) {
  const [first, second, ...otherCards] = deck;
  return [second, first, ...otherCards] ;
}

function discardTopCard(deck) {
  const [first, ...second] = deck;
  return [first,second];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

function insertFaceCards(deck) {
  const [first, ...second] = deck;
  return [first, ...FACE_CARDS, ...second];
}