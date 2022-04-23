function getItem(cards, position) {
  return cards[position]
}

function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
return cards;
}

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

function removeItem(cards, position) {
  let x = cards;
  x.splice(position, 1);
  return x;
}

function removeItemFromTop(cards) {
  let stack = cards;
  stack.pop();
  return stack;
}

function insertItemAtBottom(cards, newCard) {
  let stack = cards;
  stack.unshift(newCard);
  return stack;
}

function removeItemAtBottom(cards) {
  let stack = cards;
  stack.shift();
  return stack;
}