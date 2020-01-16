// Create buttons as variables
const boto1 = document.querySelector("#btn1");
const boto2 = document.querySelector("#btn2");
const botoRes = document.querySelector("#btnr");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winScore = 5;
// Create variables to hold score ids
const leftScore = document.querySelector('#leftScore');
const rightScore = document.querySelector('#rightScore');

let inputWinning = document.querySelector("#inputWin");
const winningScoreDisplay = document.querySelector("p span");


// Button 1
boto1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        console.log(p1Score, winScore);//compares if results are strings/numbers
        leftScore.textContent = p1Score;
        if (p1Score === winScore) {
            console.log('game over!');
            gameOver = true;
            leftScore.classList.add("verde")
        }
    }
});

// Button 2
boto2.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        rightScore.textContent = p2Score;
        if (p2Score === winScore) {
            console.log('juego perdido');
            gameOver = true;
            rightScore.classList.add("verde")
        }
    }
    
});

// RESET BUTTON
botoRes.addEventListener("click", function () {
    reset();
});

// Rest function to be used above and below
function reset() {
    gameOver = false;
    p1Score = 0; //js parts
    p2Score = 0;
    leftScore.textContent = p1Score; //html parts
    rightScore.textContent = 0;// instead of assigning to the variable, just added a 0... results are the same?
    leftScore.classList.remove("verde");
    rightScore.classList.remove("verde");
}

// INPUT FUNCTIONALITY
inputWinning.addEventListener("change", function () {
    winningScoreDisplay.textContent = this.value;
    winScore = Number(inputWinning.value);
    reset();
});
