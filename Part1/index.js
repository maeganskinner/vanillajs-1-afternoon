function play (clickedId) {
    clickedElement = document.getElementById(clickedId)

    document.getElementById('player').onClick=function(){
        if (playerSpan.innerText === 'X') {
            return playerSpan.innerText = 'O';
            board [clickedId] = 'X'
        } else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = '0'
            board [clickedId] = 'O'
    }
}
const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];