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
console.log(gameFlowModule.getCurrentPlayerName());
console.log(gameFlowModule.getCurrentPlayerSymbol());

//gameFlowModule.startGame();
    // square.addEventListener("click", () => {
    //     square.textContent = "x";
    // })
    //start game
    //while isGameActive = true;
        //if currentPlayer === player1
            //let player1 play
            //switch to secondPlayer
        //else if currentPlayer === player2
            //let player2 play
            //switch to first player

squares.forEach((square) =>{
        
    gameFlowModule.startGame();
    if(gameFlowModule.getIsGameActive() === true){
        if (gameFlowModule.getCurrentPlayerName() === "Player1"){
            square.addEventListener("click", () =>{
                square.textContent = gameFlowModule.getCurrentPlayerSymbol();
                gameFlowModule.switchPlayer();
            })
        }else if(gameFlowModule.getCurrentPlayerName() === "Player2"){
            square.addEventListener("click", () =>{
                square.textContent = gameFlowModule.getCurrentPlayerSymbol();
                gameFlowModule.switchPlayer();
            })
        }
    }


})

//if currentPlayer === player 1; next click places an X
//if currentPlayer === player 2; next click places an O

