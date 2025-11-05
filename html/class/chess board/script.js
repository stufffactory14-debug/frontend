 const chessBoard = document.querySelector(".chessboard");

const firstRow = `<div class="square"></div>`.repeat(8);


const oddRow =`<div class="sq"></div>`.repeat(8);

const completeBoard = `${firstRow} ${oddRow}`.repeat(4);

chessBoard.innerHTML = completeBoard;
