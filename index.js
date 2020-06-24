//getting the buttons
buttons = document.getElementsByTagName('button');
//which turn of the game
let turn = 0;
//1st player's character
let char = 'X'
//getting the status div
statusDiv = document.getElementById('status')

//set default attributes/properties for every single button
for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
}

//winning states
const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//checking if someone has won the game, and if yes, which player is the winner
const winnerFinder = (buttons) => {
    for (let i = 0; i < winningStates.length; i++) {
        const [a, b, c] = winningStates[i];
        if (buttons[a].innerHTML === buttons[b].innerHTML && buttons[a].innerHTML === buttons[c].innerHTML) 
        { 
            console.log(buttons[a].innerHTML)
            return (buttons[a].innerHTML);
        }
    }
    return null;
}

//event listeners for handling the clicks
for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener('click', (e) => {
        button.innerHTML = char;
        turn ++;
        button.disabled = true;
        //setting for the next turn
        if (turn % 2 == 0) {
            char = 'X';
            button.isX = true;
        } else {
            char = 'O';
            button.isY = true;
        }
        //has anybody won?
        if (winnerFinder(buttons)) {
            //stating it!
            statusDiv.innerHTML = `Player ${winnerFinder(buttons)} won!`;
            //disabling all the buttons
            for (let index = 0; index < buttons.length; index++) {
                const theButton = buttons[index];
                theButton.disabled = true;
            }
        } else {
            statusDiv.innerHTML = `Player ${char}`;
        }
    })
}