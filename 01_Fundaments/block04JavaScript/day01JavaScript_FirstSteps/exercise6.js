const chessPiece = 'King';

const pieceMovents = ['Straight Line', 'Diagonals', 'L Shape'];

const howItMoves = [];

switch (chessPiece.toLowerCase()) {
  case 'queen':
    howItMoves.push(pieceMovents[0]);
    howItMoves.push(pieceMovents[1]);
    break;

  case 'king':
    howItMoves.push(pieceMovents[0]);
    howItMoves.push(pieceMovents[1]);
    break;

  case 'rook':
    howItMoves.push(pieceMovents[0]);
    break;

  case 'bishop':
    howItMoves.push(pieceMovents[1]);
    break;

  case 'knight':
    howItMoves.push(pieceMovents[2]);
    break;

  case 'king':
    howItMoves.push(pieceMovents[0]);
    howItMoves.push(pieceMovents[1]);
    break;

  case 'pawn':
    howItMoves.push(pieceMovents[0]);
    break;

  default:
    console.log('Not a Chess Piece');
}

console.log(chessPiece, 'movements:', howItMoves);


