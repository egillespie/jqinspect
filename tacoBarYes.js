function pwn(message, ratioOfEmptySpaceToMessages) {
    var contentDiv = document.getElementsByTagName("body")[0];
    var minYPosition = 0;
    var initialMaxYPosition = document.height;
    var maxYPosition = window.innerHeight - 50;
    var minXPosition = 100;
    var maxXPosition = document.width - 300;

    var area = (initialMaxYPosition - minYPosition) * (maxXPosition - minXPosition);
    var numberOfMessages = area / ratioOfEmptySpaceToMessages ;
    var randomizedCount = Math.floor((Math.random() * (numberOfMessages * 1.5)) + (numberOfMessages * 0.5));

    for (i = 0; i < randomizedCount; i++) {
        var newDiv = document.createElement('div');
        contentDiv.appendChild(newDiv);

        var left = Math.floor(Math.random() * (maxXPosition - minXPosition)) + minXPosition;
        var top = Math.floor(Math.random() * (initialMaxYPosition - minYPosition)) + minYPosition;
        var size = Math.floor(Math.random() * 28) + 8;
        var red = Math.floor(Math.random() * 255).toString(16);
        if (red.length == 1) {
            red = "0" + red;
        }
        var green = Math.floor(Math.random() * 255).toString(16);
        if (green.length == 1) {
            green = "0" + green;
        }
        var blue = Math.floor(Math.random() * 255).toString(16);
        if (blue.length == 1) {
            blue = "0" + blue;
        }
        var color = "#" + red + green + blue;

        newDiv.id = "pwnMessages" + i;
        newDiv.style.color = color;
        newDiv.style.position = "absolute";
        newDiv.style.fontSize = size + "px";
        newDiv.style.left = left + "px";
        newDiv.style.top = top + "px";
        newDiv.innerHTML = message;

        beginMoving(newDiv, size, minYPosition, maxYPosition, minXPosition, maxXPosition);

    }
}

function beginMoving(element, size, minYPosition, maxYPosition, minXPosition, maxXPosition) {

    var curX = element.offsetLeft;
    var curY = element.offsetTop;

    var speedX = Math.floor(Math.random() * 7) - 3;
    var speedY = Math.floor(Math.random() * 7) - 3;

    move(element, size, 0, curX, curY, speedX, speedY, minYPosition, maxYPosition, minXPosition, maxXPosition, size, 0);

}

function move(element, size, sizeSpeed, curX, curY, speedX, speedY, minYPosition, maxYPosition, minXPosition, maxXPosition, blinkRate, blinkCounter) {
    curX = curX + speedX;
    curY = curY + speedY;

    if (curX + element.clientWidth >= maxXPosition && speedX > 0 || curX < minXPosition && speedX < 0) {
        speedX = -speedX;
    }
    if (curY + element.clientHeight >= maxYPosition && speedY > 0 || curY < minYPosition && speedY < 0) {
        speedY = -speedY;
    }


    size = size + sizeSpeed;
    if (size > 72) {
        sizeSpeed = 0 - Math.floor(Math.random() * 3);
        size = 71;
    }
    if (size < 8) {
        sizeSpeed = Math.floor(Math.random() * 3);
        size = 9;
    }
    element.style.fontSize = size + "px";

    element.style.top = curY + "px";
    element.style.left = curX + "px";

    var rand = Math.floor(Math.random() * 1000);
    if (rand < 10 && speedX < 2) {
        speedX++;
    } else if (rand >= 10 && rand < 20 && speedY < 2) {
        speedY++;
    } else if (rand >= 20 && rand < 40 && speedX > -2) {
        speedX--;
    } else if (rand >= 30 && rand < 40 && speedY > -2) {
        speedY--;
    } else if (rand >= 40 && rand < 50 && sizeSpeed < 2 && sizeSpeed != 0) {
        sizeSpeed++;
    } else if (rand >= 50 && rand < 60 && sizeSpeed > -2 && sizeSpeed != 0) {
        sizeSpeed--;
    } else if (rand >= 60 && rand < 62 && sizeSpeed == 0) {
        sizeSpeed++;
    } else if (rand >= 62 && rand < 64 && sizeSpeed == 0) {
        sizeSpeed--;
    } else if (rand > 996) {
        var red = Math.floor(Math.random() * 255).toString(16);
        if (red.length == 1) {
            red = "0" + red;
        }
        var green = Math.floor(Math.random() * 255).toString(16);
        if (green.length == 1) {
            green = "0" + green;
        }
        var blue = Math.floor(Math.random() * 255).toString(16);
        if (blue.length == 1) {
            blue = "0" + blue;
        }
        var color = "#" + red + green + blue;
        element.style.color = color;
    }
    if (element.style.display == "block") {
        if (blinkCounter > blinkRate) {
            element.style.display = "none";
            blinkCounter = 0;
        }
    } else {
        if (blinkCounter > blinkRate / 2) {
            element.style.display = "block";
            blinkCounter = 0;
        }
    }


    var moveElement = function() {
        move(element, size, sizeSpeed, curX, curY, speedX, speedY, minYPosition, maxYPosition, minXPosition, maxXPosition, size, blinkCounter + 1);
    }
    setTimeout(moveElement, 1);

}

pwn("TACO BAR&nbsp;&nbsp;YES", 10000);
