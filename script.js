let score = 0;
let cross = true;
let isGameOver = false;

document.onkeydown = function(e){
    if (isGameOver) return; 
    console.log("Key code is: ",e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
                       dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt( window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt( window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx =parseInt( window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    Ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    Oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-Ox);
    offsetY = Math.abs(dy-Oy);
    console.log(offsetX, offsetY);

    if(offsetX < 73 && offsetY < 52){
        gameOver.innerHTML = "Game Over - Reload to start over";
        obstacle.classList.remove('obstacleAni');
        isGameOver = true;
    }
    else if(offsetX < 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animaton-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        }, 500);
       
    }
}, 10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}
