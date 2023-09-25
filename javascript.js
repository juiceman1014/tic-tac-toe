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