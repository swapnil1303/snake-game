let direction ={x:0, y:0};
let speed =2;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
]
food={x:14,y:15}
// Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<(1/speed)){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
    // console.log(ctime);
}
function gameEngine(){
    // part 1 : update snake array
    // part 2: render the snake and food
    // display snake
    board.innerHTML="";
    snakeArr.forEach((e,idx)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(idx===0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    // display food
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1};
    switch(e.key){
        case "ArrowUp":
            console.log('up');
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log('down');
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log('left');
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("right");
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break;
    }
})