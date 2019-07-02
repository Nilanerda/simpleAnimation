function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function circleMove(circle) {
    var circleRedius = parseInt(circle.style.height);
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if (!circle.style.left || !circle.style.top) {
        circle.style.left = (windowWidth / 2 ) - circleRedius + 'px';
        circle.style.top = (windowHeight / 2) - circleRedius + 'px';
    }

    var circleLeft = parseInt(circle.style.left);
    var circleTop = parseInt(circle.style.top);
    var circleVectorX = parseInt(circle.dataset.vectorx);
    var circleVectorY = parseInt(circle.dataset.vectory);
    var circleSpeed = parseInt(circle.dataset.speed);

    if (circleLeft > (windowWidth - circleRedius)) {
        circle.dataset.vectorx = -1;
        circle.style.backgroundColor = getRandomColor()
    } else if (circleLeft <= 0) {
        circle.dataset.vectorx = 1;
        circle.style.backgroundColor = getRandomColor()
    }

    if (circleTop > windowHeight - circleRedius) {
        circle.dataset.vectory = -1;
        circle.style.backgroundColor = getRandomColor()
    } else if (circleTop < 0) {
        circle.dataset.vectory = 1;
        circle.style.backgroundColor = getRandomColor()
    }

    circle.style.left = (circleLeft + (circleVectorX * circleSpeed)) + 'px';
    circle.style.top = (circleTop + (circleVectorY * circleSpeed )) + 'px';
}

function run(){
    var circles = document.getElementsByClassName('shape');
    for (circle of circles) {
        circleMove(circle);
    }
}

setInterval(run, 10);



