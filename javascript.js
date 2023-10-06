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
    let isDraw = true;

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
        //Check for "X" win
        if(gameBoardModule.getGrid()[0][0] == "X" && gameBoardModule.getGrid()[0][1] == "X" && gameBoardModule.getGrid()[0][2] == "X"){
            return "player1";
        }else if(gameBoardModule.getGrid()[1][0] == "X" && gameBoardModule.getGrid()[1][1] == "X" && gameBoardModule.getGrid()[1][2] == "X"){
            return "player1";
        }else if(gameBoardModule.getGrid()[2][0] == "X" && gameBoardModule.getGrid()[2][1] == "X" && gameBoardModule.getGrid()[2][2] == "X"){
            return "player1";
        }else if(gameBoardModule.getGrid()[0][0] == "X" && gameBoardModule.getGrid()[1][0] == "X" && gameBoardModule.getGrid()[2][0] == "X"){
            return "player1";
        }else if(gameBoardModule.getGrid()[0][1] == "X" && gameBoardModule.getGrid()[1][1] == "X" && gameBoardModule.getGrid()[2][1] == "X"){
            return "player1";
        }else if(gameBoardModule.getGrid()[0][2] == "X" && gameBoardModule.getGrid()[1][2] == "X" && gameBoardModule.getGrid()[2][2] == "X"){
            return "player1";
        }else if(gameBoardModule.getGrid()[0][0] == "X" && gameBoardModule.getGrid()[1][1] == "X" && gameBoardModule.getGrid()[2][2] == "X"){
            return "player1";
        }else if(gameBoardModule.getGrid()[0][2] == "X" && gameBoardModule.getGrid()[1][1] == "X" && gameBoardModule.getGrid()[2][0] == "X"){
            return "player1";
        }
        //Check for "O" win
        else if(gameBoardModule.getGrid()[0][0] == "O" && gameBoardModule.getGrid()[0][1] == "O" && gameBoardModule.getGrid()[0][2] == "O"){
            return "player2";
        }else if(gameBoardModule.getGrid()[1][0] == "O" && gameBoardModule.getGrid()[1][1] == "O" && gameBoardModule.getGrid()[1][2] == "O"){
            return "player2";
        }else if(gameBoardModule.getGrid()[2][0] == "O" && gameBoardModule.getGrid()[2][1] == "O" && gameBoardModule.getGrid()[2][2] == "O"){
            return "player2";
        }else if(gameBoardModule.getGrid()[0][0] == "O" && gameBoardModule.getGrid()[1][0] == "O" && gameBoardModule.getGrid()[2][0] == "O"){
            return "player2";
        }else if(gameBoardModule.getGrid()[0][1] == "O" && gameBoardModule.getGrid()[1][1] == "O" && gameBoardModule.getGrid()[2][1] == "O"){
            return "player2";
        }else if(gameBoardModule.getGrid()[0][2] == "O" && gameBoardModule.getGrid()[1][2] == "O" && gameBoardModule.getGrid()[2][2] == "O"){
            return "player2";
        }else if(gameBoardModule.getGrid()[0][0] == "O" && gameBoardModule.getGrid()[1][1] == "O" && gameBoardModule.getGrid()[2][2] == "O"){
            return "player2";
        }else if(gameBoardModule.getGrid()[0][2] == "O" && gameBoardModule.getGrid()[1][1] == "O" && gameBoardModule.getGrid()[2][0] == "O"){
            return "player2";
        }

        //Check for a draw
        else if(gameBoardModule.getGrid()[0][0] != 0 && gameBoardModule.getGrid()[0][1] != 0 && gameBoardModule.getGrid()[0][2] != 0 &&
                gameBoardModule.getGrid()[1][0] != 0 && gameBoardModule.getGrid()[1][1] != 0 && gameBoardModule.getGrid()[1][2] != 0 &&
                gameBoardModule.getGrid()[2][0] != 0 && gameBoardModule.getGrid()[2][1] != 0 && gameBoardModule.getGrid()[2][2] != 0){
                        return "draw";
            }
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
        checkWin,
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
                if(gameFlowModule.checkWin() == "player1"){
                    gameFlowModule.endGame();
                    console.log(gameFlowModule.getIsGameActive());
                    console.log("player 1 dub");
                }else if(gameFlowModule.checkWin() == "draw"){
                    gameFlowModule.endGame();
                    console.log(gameFlowModule.getIsGameActive());
                    console.log("DRAW");
                }
        }

        }else if(gameFlowModule.getCurrentPlayerName() === "Player2"){
            if(square.textContent.trim() === ""){
                square.textContent = gameFlowModule.getCurrentPlayerSymbol();
                gameBoardModule.getGrid()[row][col] = gameFlowModule.getCurrentPlayerSymbol();
                gameFlowModule.switchPlayer();
                console.log(gameBoardModule.getGrid());
                gameFlowModule.checkWin();
                if(gameFlowModule.checkWin() == "player2"){
                    gameFlowModule.endGame();
                    console.log(gameFlowModule.getIsGameActive());
                    console.log("player 2 dub");
                }else if(gameFlowModule.checkWin() == "draw"){
                    gameFlowModule.endGame();
                    console.log(gameFlowModule.getIsGameActive());
                    console.log("DRAW");
                }
        }
        }
     }
    }) 
})






