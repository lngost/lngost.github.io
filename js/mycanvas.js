/* 
The MIT License (MIT)
Copyright (c) 2014 lngost
See http://opensource.org/licenses/MIT

Author @lngost
 */

window.onload = init;
window.addEventListener('load',resize,false);
window.addEventListener('resize',resize,false);

window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000/60);
        };
})();

function init() {

    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    ratio = 0;
    radius = 0;
                        
    myBubbles = [];
    myBubbles_index = 0;
    totalBubbles = 120;
    
    
    createBubbles();
    
    setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(canvas,context,startTime);
    },100);
    
}

function createBubbles() {
    for(i=0; i<totalBubbles; i++) {
        var positionX = Math.floor(Math.random()*canvas.width);
        var positionY = Math.floor(Math.random()*canvas.height);
        radius = Math.floor(Math.random()*7 + 3);
                                
        var aBubble = {corX:positionX, corY:positionY, b_radius:radius};
        myBubbles.push(aBubble);
                                
    }
}
                
function drawCircle(centerX, centerY, r) {
    context.beginPath();
    context.arc(centerX, centerY, r, 0, 2*Math.PI);
    context.fillStyle = "rgba(255, 255, 255, 0.7)";
    context.fill();
    context.strokeStyle = "rgba(255, 255, 255, 0)";
    context.stroke();
}
                        
function drawPattern() {
                            
    formText();
    
    restBubbles = totalBubbles - myBubbles_index;
    for(ib=myBubbles_index; ib<totalBubbles; ib++) {
        if(ib % 2 === 0) {
            myBubbles[ib].corX = Math.floor(Math.random()*spareBubbleRange_X1);
        } else {
            myBubbles[ib].corX = Math.floor(Math.random()*(canvas.width-spareBubbleRange_X2) + spareBubbleRange_X2);
        }
        
        myBubbles[ib].corY = Math.floor(Math.random()*canvas.height);
        myBubbles[ib].b_radius = Math.floor(Math.random()*4 + 2);
        
        drawCircle(myBubbles[ib].corX, myBubbles[ib].corY, myBubbles[ib].b_radius*ratio);
    }
    
}
                        
function resize() {                     
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    ratio = canvas.width / 1440;
    myBubbles_index = 0;
    drawPattern();

}
                        



function animate(canvas,context,startTime) {
    context.clearRect(0,0,canvas.width,canvas.height);
    //var time = (new Date()).getTime();
    var linearSpeed = 3;
    
    for(ia=0; ia<totalBubbles-restBubbles; ia++) {
        var targetX = myBubbles[ia].corX + 1.7*Math.random();
        var targetY = myBubbles[ia].corY + 1.7*Math.random();
        
        drawCircle(targetX,targetY,myBubbles[ia].b_radius);
    }
    
    for(ia; ia<totalBubbles; ia++) {
        var targetX = myBubbles[ia].corX + (Math.random()*linearSpeed - linearSpeed/2);
        var targetY = myBubbles[ia].corY + (Math.random()*linearSpeed - linearSpeed/2);
        
        if(targetX < 6) {
            targetX = 6;
        } else if(targetX > spareBubbleRange_X1 && targetX < spareBubbleRange_X2) {
            if( Math.abs(targetX - spareBubbleRange_X1) < Math.abs(targetX - spareBubbleRange_X2) ) {
                targetX = spareBubbleRange_X1;
            } else {
                targetX = spareBubbleRange_X2;
            }
        } else if(targetX > canvas.width - 6){
            targetX = canvas.width - 6;
        }
        
        if(targetY < 6) {
            targetY = 6;
        } else if(targetY > canvas.height - 6) {
            targetY = canvas.height - 6;
        }
                                
        myBubbles[ia].corX = targetX;
        myBubbles[ia].corY = targetY;
        
        if(canvas.width > 800) {
            drawCircle(targetX,targetY,myBubbles[ia].b_radius);
        }
    }
                            
    requestAnimFrame(function() {
        animate(canvas,context,startTime);
    });
}
                        
                        
function formText() {
    //context.clearRect(0,0,canvas.width,canvas.height);
    if(canvas.width < 640) {
        wordMatrix(0.28*canvas.width,0.4*canvas.height,"LIN");
    } else {
        wordMatrix(0.28*canvas.width,0.4*canvas.height,"LIN'S BLOG");
    }
}
                        
function wordMatrix(initialX, initialY,words) {
    var wordLength = words.length;
    var keyArray = [];
    var adjustValue = 66*ratio;
    
    if(canvas.width < 1150) {
        initialX = 0.2*canvas.width;
    }
    if(canvas.width < 980) {
        initialX = 0.19*canvas.width;
    }
    if(canvas.width < 850) {
        initialX = 0.14*canvas.width;
    }
    if(canvas.width < 800) {
        initialX = 0.11*canvas.width;
    }
    
    
    if(canvas.width < 640) {
        initialX = 0.35*canvas.width;
    }
    if(canvas.width < 460) {
        initialX = 0.3*canvas.width;
    }
    if(canvas.width < 390) {
        initialX = 0.26*canvas.width;
    }
    if(canvas.width < 340) {
        initialX = 0.23*canvas.width;
    }
    if(adjustValue < 65) {
        adjustValue = 65;
    }


    for(k=0; k<wordLength; k++) {
        switch(words.charAt(k)) {
            case 'L': keyArray = [0,5,12,21,32,40,48,56,64]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            case 'I': keyArray = [0,1,2,3,4,15,24,35,32,40,48,56,64]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            case 'N': keyArray = [0,4,5,10,25,12,24,36,21,42,49,32,64]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            case '\'': keyArray = [2,15,18]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            case 'B': keyArray = [0,1,2,3,5,25,12,18,24,30,21,49,32,40,48,56]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            case 'S': keyArray = [1,2,3,4,5,18,24,30,49,32,40,48,56]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            case 'O': keyArray = [1,2,3,5,25,12,36,21,49,40,48,56]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            case 'G': keyArray = [1,2,3,4,5,12,30,36,21,49,40,48,56]; generatePoints(initialX+adjustValue*k,initialY,keyArray); break;
            default: break;
        }
    }
                            
    spareBubbleRange_X1 = initialX - 20;
    spareBubbleRange_X2 = initialX + adjustValue*wordLength + 20;
    
}


/*

    5*5 word matrix - position tag
    
     \i |  0   1   2   3   4
    j \ |____________________
    0   |  0   1   2   3   4    (i+j) * 1
    1   |  5  10  15  20  25    (i+j) * 5
    2   | 12  18  24  30  36    (i+j) * 6
    3   | 21  28  35  42  49    (i+j) * 7
    4   | 32  40  48  56  64    (i+j) * 8
    
 */

function generatePoints(cenX,cenY,key) {
    var key_index = 0;
    var key_len = key.length;
    var expandRatio = [1,5,6,7,8];
    
    var rad = 5;
    for(i=0; i<5; i++) {
        for(j=0; j<5; j++) {
            if( (i+j)*expandRatio[i] === key[key_index] ) {
                myBubbles[myBubbles_index].corX = cenX+(rad*2+1)*j;
                myBubbles[myBubbles_index].corY = cenY;
                myBubbles[myBubbles_index].b_radius = rad;
                myBubbles_index++;
                if(myBubbles_index >= totalBubbles) {
                    myBubbles_index = totalBubbles;
                }
                drawCircle(cenX+(rad*2+1)*j,cenY,rad);
                
                key_index++;
                if(key_index >= key_len) {
                    key_index = 0;
                }
            }
                                    
        }
        cenY += rad*2+2;
    }
}
                        
                        
                        
