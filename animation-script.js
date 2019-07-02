var circle = document.getElementById('circle');
var xPos = 0;
var yPos = 0;

const CIRCLE_STEP = 2;

var xMove = CIRCLE_STEP;
var yMove = CIRCLE_STEP;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function circleMove() {
    circle.style.left = xPos + 'px';
    circle.style.top = yPos + 'px';
    xPos += xMove;
    yPos += yMove;


    if (xPos > 900) {
        xMove = -CIRCLE_STEP;
        circle.style.backgroundColor = getRandomColor()
    } else if (xPos <= 0) {
        xMove = CIRCLE_STEP;
        circle.style.backgroundColor = getRandomColor()
    }

    if (yPos > 400) {
        yMove = -CIRCLE_STEP;
        circle.style.backgroundColor = getRandomColor()
    } else if (yPos < 0) {
        yMove = CIRCLE_STEP;
        circle.style.backgroundColor = getRandomColor()
    }
}

setInterval(circleMove, 5);



