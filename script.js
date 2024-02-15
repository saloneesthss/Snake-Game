//Game Constants and Variables
let inputDir={x:0, y:0};
const foodSound=new Audio('eating.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
let speed=2;
let score=0;
let lastPaintTime=0;
let snakeArr=[
    {x:13, y:15}
]
food={x:6, y:7};

//Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}

function isCollide(sarr) {
    return false;
}

function gameEngine(){
    //Updating the snake array and food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0, y:0}
        alert("Game Over. Tap to play again!");
        snakeArr=[{x:13, y:15}];
        musicSound.play();
        score=0;
    }

//If the food is eaten, then increase the score and regenerate the food

    
    //Display the snake
    board.innerHTML="";
    snakeArr.forEach((e, index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;

        if(index===0){
            snakeElement.classlist.add('head');
        }
        else{
            snakeElement.classlist.add('snake');
        }
        board.appendChild(snakeElement);
    });

    //Display the food
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classlist.add('food');
    board.appendChild(foodElement);
}


//Main logic of game
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0, y:1}  // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
        
        default:
            break;
    }
});
