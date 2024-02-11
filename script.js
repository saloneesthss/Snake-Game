//Game Constants and Variables
let direction={x:0, y:0};
const foodSound=new Audio('eating.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {x:13, y:15}
]
food={x:6, y:7};

//Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}

function gameEngine(){
    //Updating the snake array and food

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
            console.log("ArrowUp")
            break;

        case "ArrowDown":
                console.log("ArrowDown")
                break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            break;
        
        default:
            break;
    }
});