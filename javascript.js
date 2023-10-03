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

    const checkWin = () => {

    }

    const getIsGameActive = () => isGameActive;

    const getCurrentPlayerName = () => currentPlayer.name;
    const getCurrentPlayerSymbol = () => currentPlayer.symbol;

    //public
    return {
        getIsGameActive,
        getCurrentPlayerName,
        getCurrentPlayerSymbol,
        switchPlayer,
        startGame,
        endGame,
    }
})();

const squares = document.querySelectorAll(".grid-item");

gameFlowModule.startGame();
squares.forEach((square) =>{
    square.addEventListener("click", () => {
    if(gameFlowModule.getIsGameActive() === true){
        const row = square.dataset.row;
        const col = square.dataset.col;

        if (gameFlowModule.getCurrentPlayerName() === "Player1"){
            if(square.textContent.trim() === ""){
                square.textContent = gameFlowModule.getCurrentPlayerSymbol();
                gameBoardModule.getGrid()[row][col] = gameFlowModule.getCurrentPlayerSymbol();
                gameFlowModule.switchPlayer();
                console.log(gameBoardModule.getGrid());
        }

        }else if(gameFlowModule.getCurrentPlayerName() === "Player2"){
            if(square.textContent.trim() === ""){
                square.textContent = gameFlowModule.getCurrentPlayerSymbol();
                gameBoardModule.getGrid()[row][col] = gameFlowModule.getCurrentPlayerSymbol();
                gameFlowModule.switchPlayer();
                console.log(gameBoardModule.getGrid());
        }
        }
     }
    }) 
})



