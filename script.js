let inputDir ={x:0, y:0};
let speed =5;
let lastPaintTime=0;
let score=0;
let snakeArr=[
    {x:5,y:5}
]
let scoreList=document.getElementById('score-list');
// scoreCard.innerHTML="Right bites :"+ score;
food={x:10,y:5}
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
function isCollide(snakeArr){
    // bump into self
    for(let i = 1; i<snakeArr.length;i++){
        if((snakeArr[0].x===snakeArr[i].x) && (snakeArr[0].y===snakeArr[i].y)){
            
            return true;
        } 
    }
    if(snakeArr[0].x>=18 || snakeArr[0].x<=1) return true;
    if(snakeArr[0].y<=1 || snakeArr[0].y>=18) return true;
    return false;
    // bump into walls
}
function gameEngine(){
    if(isCollide(snakeArr)){
        inputDir={x:0,y:0};
        alert("Game over.. Press any key to play again");
        snakeArr=[{x:5,y:5}];

        // create score element 
        const scoreElement = document.createElement('div');
        scoreElement.classList.add('scores');
        scoreElement.innerHTML = score;
        scoreList.appendChild(scoreElement);
        // reset score
        score=0;
    }
    // if food is eaten increament score and extend snake body
    if((snakeArr[0].y===food.y) && (snakeArr[0].x===food.x)){
        score+=1;
        // scoreCard.innerHTML="Right bites :"+ score;
        let a=2;
        let b=16;
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y:snakeArr[0].y+ inputDir.y});
        food = {x: Math.round(a+ (b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())};
    }
    // Moving the snake
    for(let i=snakeArr.length-2;i>=0;i--){
        // const element=array[i];
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x+=inputDir.x;
    snakeArr[0].y+=inputDir.y;
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