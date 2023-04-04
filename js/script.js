function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage(
    'Mój ruch to: ' + argComputerMove + ', Twój ruch to: ' + argPlayerMove
  );

  console.log('moves:', argComputerMove, argPlayerMove);

  if (
    (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce')
  ) {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis');
  } else if (argPlayerMove == 'nieznany ruch') {
    printMessage('Jeszcze raz');
  } else {
    printMessage('Ja wygrywam');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove);
