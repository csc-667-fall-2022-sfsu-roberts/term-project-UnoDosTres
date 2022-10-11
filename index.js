const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

c.fillRect(0,0, canvas.width,canvas.height);

class sprite {
    constructor(position) {
        this.position = position;
    }

    draw() {
        c.fillStyle = "blue"
        c.fillRect(this.position.x,this.position.y, 50, 110);
    }
}

const card = new sprite({ x:0, y:0 });

card.draw();

console.log(card);
