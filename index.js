const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth/2;
canvas.height = innerHeight/2;

c.fillStyle = "orange";
c.fillRect(0,0, canvas.width, canvas.height);

class Sprite {
    constructor(position) {
        this.position = position;
    }

    draw() {
        //c.fillStyle = "orange";
        //c.fillRect(0,0, canvas.width, canvas.height);

        c.fillStyle = "red"
        c.fillRect(this.position.x,this.position.y, 500, 110);
    }
}

const card = new Sprite({ x:0, y:0 });

card.draw();

console.log(card);
