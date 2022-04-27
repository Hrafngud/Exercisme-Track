function createScoreBoard(playerName,playerScore) {
  let playerBoard = {
  'The Best Ever': 1000000,
  playerName: playerScore,
}
  return playerBoard;
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] = (scoreBoard[player] + points);
  return scoreBoard;
}

function applyMondayBonus(scoreBoard) {
   for (let player in scoreBoard) {
    scoreBoard[player] = (scoreBoard[player] + 100);
}
  return scoreBoard;
}

function normalize(score) {
  return 2 * score + 10;
}

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}