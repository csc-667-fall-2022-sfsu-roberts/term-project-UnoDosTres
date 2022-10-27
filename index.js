const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth/2;
canvas.height = innerHeight/2;

c.fillStyle = "orange";
c.fillRect(0,0, canvas.width, canvas.height);

playerCardPos = canvas.width - 35, canvas.height + 200;
deckPos = canvas.width*0.75, canvas.height*0.75;
centerPos =  canvas.width - 35, canvas.height - 75;

class Sprite {
    constructor(position, velocity) {
        this.position = position;
        this.velocity = velocity;
    }

    draw() {
        //c.fillStyle = "orange";
        //c.fillRect(0,0, canvas.width, canvas.height);

        c.fillStyle = "red"
        c.fillRect(this.position.x,this.position.y, 70, 150);
    }

    update() {
        this.draw();
        this.takeCard();
        this.putCard();
    }

    takeCard() {
        //only for Decs
        this.position += playerCardPos;
    }

    putCard() {
        //only for playerCards
        this.position += centerPos;
    }
} 

const card = new Sprite({
    position: { x: playerCardPos.x, y: playerCardPos.y},
    velocity: {x: 0 , y: 0}
});
const dec = new Sprite({ 
    position: {x: deckPos.x, y: deckPos.y,},
    velocity: {x: 0 , y: 0}
});
const DropOff = new Sprite({
    position: { x:centerPos.x, y: centerPos.y},
    velocity: {x: 0 , y: 0}
});


card.draw(); 

console.log(card,dec);

function Animate() {

    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width, canvas.height);
    console.log("FramePerSec");
    player.update();
    dec.update();
    DropOff.update();
}


animate();

window.addEventListener('keydown', (event) => {
    if (event.key = 'i') {

    }

    if (event.key = 'o') {

    }
    console.log(event.key)})