document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// var board =
var board = {
    cells: [
        {
            row: 0,
            col: 0,
            isMine: false,
            isMarked: false,
            hidden: true
        }, {
            row: 1,
            col: 0,
            isMine: false,
            isMarked: false,
            hidden: true
        }, {
            row: 2,
            col: 0,
            isMine: false,
            isMarked: false,
            hidden: true
        }, {
            row: 0,
            col: 1,
            isMine: false,
            isMarked: false,
            hidden: true
        }, {
            row: 1,
            col: 1,
            isMine: false,
            isMarked: false,
            hidden: true
        }, {
            row: 2,
            col: 1,
            isMine: false,
            isMarked: false,
            hidden: true
        }, {
            row: 0,
            col: 2,
            isMine: false,
            isMarked: false,
            hidden: true
        }, {
            row: 1,
            col: 2,
            isMine: true,
            isMarked: false,
            hidden: true
        }, {
            row: 2,
            col: 2,
            isMine: false,
            isMarked: false,
            hidden: true
        }
    ]
};
function startGame() {
    // Don't remove this function call: it makes the game work!
    lib.initBoard()
    for (i = 0; i < board.cells.length; i++) {
        board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
        document.addEventListener("click", checkForWin);
        document.addEventListener("contextmenu", checkForWin);
    }
}
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
    var win = 0
    for (i = 0; i < board.cells.length; i++) {

        if ((board.cells[i].isMine == true) && (board.cells[i].isMarked == true)) {
            win++

        } else if ((board.cells[i].hidden !== true) && (board.cells[i].isMine !== true)) {
            win++;
        } else {
            return;
        }

    }
    if(win = 9){lib.displayMessage('You win!')
    }
}
// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
    var count = 0;
    var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
    for (var i = 0; i < surroundingCells.length; i++) {
        if (surroundingCells[i].isMine == true) {
            count++;
        }
    }
    return count;
};
