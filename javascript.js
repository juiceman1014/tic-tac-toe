const gameBoardModule = (function (){
    const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
        ];

    return{
        getGrid: function(){
            return grid;
        }
    };
})();

const playerFactory = (name, symbol) => {
    return {name, symbol};
}

const gameFlowModule = (() => {
    let isGameActive = true;
    let currentPlayer = null;

    const switchPlayer = () => {
        currentPlayer = (currentPlayer === players.player1) ? players.player2 : players.player1;
    };

    const startGame = () => {
        isGameActive = true;
        currentPlayer  = players.player1;
    };

    const endGame = () => {
        isGameActive = false;
    };

    //public
    return {
        isGameActive,
        currentPlayer,
        switchPlayer,
        startGame,
        endGame,
    }
})();

//create an event listener that allows user to place marker
//create a reference to each grid item
const squares = document.querySelectorAll(".grid-item");

//player 1 
//player 2 

//console.log(gameFlowModule.currentPlayer);


let player1 = playerFactory("Player1", "X");

gameFlowModule.currentPlayer = player1;

squares.forEach((square) =>{
    square.addEventListener("click", () => {
        square.textContent = "x";
    })
})

//if currentPlayer === player 1; next click places an X
//if currentPlayer === player 2; next click places an O

