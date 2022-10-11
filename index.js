const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

c.fillRect(0,0, canvas.width,canvas.height);

class Sprite {
    constructor(position) {
        this.position = position;
    }

    draw() {
        c.fillStyle = "blue"
        c.fillRect(this.position.x,this.position.y, 50, 110);

        c.fillStyle = "black"
        c.fillRect(this.position.x,this.position.y, 20, 30);
    }
}

const card = new Sprite({ x:0, y:0 });

card.draw();

console.log(card);
