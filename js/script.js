{
  const playGame = function (playerInput) {
    clearMessages();

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

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
  };

  /* alternatywna wersja
  const buttonRock=document.getElementById('play-rock');
  buttonRock.addEventListener('click', function () {
    playGame(1);
  });*/

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });

  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
}
