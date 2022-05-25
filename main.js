const canvas =document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = 320;
const height = canvas.height = 480;

canvas.style.marginTop = window.innerHeight /2 -height /2 +"px";

const frameWidth = 32;
const frameHeight = 35;
const xPos = 130;
const yPos = 100;
const scale = 1;
const fps = 60;
const secondToUpdate = 1* fps;
let frameIndex = 0;
let count = 0;

const img1 = new Image();
img1.src = './Pink_Monster_Run_6.png';

function animate(){
    ctx.drawImage(img1, frameIndex*frameWidth, 0, frameWidth, frameHeight, xPos, yPos, frameWidth*scale, frameHeight*scale);
    count ++;
    if(count > 10 ){
        frameIndex ++;
        count = 0;
    }
    if(frameIndex > 5){
        frameIndex = 0;
    }
}

function frame() {
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(frame);
    animate();
}

frame();
