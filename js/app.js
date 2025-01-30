/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
 let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
 }

 let timer
 let gameOver


/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')
const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');
const gameMessageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/


function init () {
    resetBtnEl.classList.add('hidden')
    gameMessageEl.classList.add('hidden')
    timer = setInterval(runGame, 2000) 
    state = {
        boredom: 0,
        hunger: 0,
        sleepiness: 0,
        };
    gameOver = false



function runGame() {
   updateStates();
   checkGameOver();
   render();
   
}

function render() {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent =  state.hunger
    sleepinessStatEl.textContent = state.sleepiness

    if (gameOver === true){
            clearInterval(timer);
            resetBtnEl.classList.remove('hidden')
            gameMessageEl.classList.remove('hidden')

        }
    }


function updateStates(){
    state.boredom += Math.floor(Math.random() * 4);
    state.hunger += Math.floor(Math.random() * 4);
    state.sleepiness += Math.floor(Math.random() * 4);
    
}

function checkGameOver(){
    for (let property in state) {
        if (state[property] >= 10){
            gameOver = true
            //console.log(`hi ${property} idk what to say`);
        return;
        }
    }
};

function playBtnClick() {
    state.boredom = 0 
    render();

    
}
function feedBtnClick() {
    state.hunger = 0 
    render();

    
}
function sleepBtnClick() {
    state.sleepiness = 0 
    render();

    
}
/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)
resetBtnEl.addEventListener('click', init)
gameMessageEl.addEventListener('click', init)

init();

// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
