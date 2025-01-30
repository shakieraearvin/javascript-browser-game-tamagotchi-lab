/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
 let state ={
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
const div = document.querySelector('.hidden')
/*-------------------------------- Functions --------------------------------*/

function init () {
gameOver = false
timer = setInterval(runGame, 2000) 
    

}
function runGame(){
   updateStates();
   checkGameOver();
   render();
   
}

function render(){
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent =  state.hunger
    sleepinessStatEl.textContent = state.sleepiness

    if (gameOver === true){
            clearInterval(timer);
            div.class.hidden;
        
            resetBtnEl.class.remove('hidden')
            gameMessageEl.class.remove('hidden')

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
    


}
/*----------------------------- Event Listeners -----------------------------*/
init()

// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
