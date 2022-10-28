const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth/2;
canvas.height = innerHeight/2;

c.fillStyle = "green";
c.fillRect(0,0, canvas.width, canvas.height);

playerCardPos = canvas.width - 35, canvas.height + 200;
deckPos = canvas.width*0.75, canvas.height*0.75;
centerPos =  canvas.width - 35, canvas.height - 75;

cardTypes = 14;
colors = 3;
takeCard = false;
putCard = false;

class Sprite {
    constructor(position, type) {
        this.position = position;
        this.type = type;
    }

    draw() {
        //c.fillStyle = "orange";
        //c.fillRect(0,0, canvas.width, canvas.height);

        c.fillStyle = "red"
        c.fillRect(this.position.x,this.position.y, 70, 150);
    }

    update() {
        this.draw();

        if (takeCard) {
            card.type.x = int*Math.random()*cardTypes;
            card.type.y = int*Math.random()*colors;
        }

        if (putCard) {
            DropOff.type = card.type;
        }
    }
} 

const card = new Sprite({
    position: { x: playerCardPos.x, y: playerCardPos.y},
    type: {x: 0,y: 1}
});
const dec = new Sprite({ 
    position: {x: deckPos.x, y: deckPos.y,}
});
const DropOff = new Sprite({
    position: { x:centerPos.x, y: centerPos.y},
    type: {x: 0,y: 1}
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
    switch(event.key) {
        case i:
            takeCard = true;
        break;
        case o:
            putCard = true;
        break;
    }
})

window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case i:

        break;
        case o:

        break;
    }
})
