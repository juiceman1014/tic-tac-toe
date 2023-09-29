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

const player1 = playerFactory("Player1", "X");
const player2 = playerFactory("Player2", "O");

const gameFlowModule = (() => {
    let isGameActive = null;
    let currentPlayer = null;

    const switchPlayer = () => {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    };

    const startGame = () => {
        isGameActive = true;
        currentPlayer  = player1;
    };

    const endGame = () => {
        isGameActive = false;
    };

    const getIsGameActive = () => isGameActive;
    const getCurrentPlayer = () => currentPlayer;

    //public
    return {
        getIsGameActive,
        getCurrentPlayer,
        switchPlayer,
        startGame,
        endGame,
    }
})();

const squares = document.querySelectorAll(".grid-item");

squares.forEach((square) =>{
    square.addEventListener("click", () => {
        square.textContent = "x";
    })
})

//if currentPlayer === player 1; next click places an X
//if currentPlayer === player 2; next click places an O

