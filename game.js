let k =0;
let inp_x = createInput('');
inp_x.position(0, 0);
inp_x.size(100);
let inp_y = createInput('');
inp_y.position(0, 0);
inp_y.size(100);
const a = Math.floor(Math.random() * 1000);
const b = Math.floor(Math.random() * 1000);
const c = Math.floor(Math.random() * 1000);
let x_pic,y_pic;

function setup() {
createCanvas(400, 400);

FindSolutions()
// Create buttons for creating
// and removing the canvas

// createBtn = createButton("Press me");
// createBtn.position(200, 200);
// createBtn.mouseClicked(Increment);
}

function FindSolutions()
{
    const res = [];
    let x,y;
    for (let x = 1; x < 1000; x++){
        if (Number.isInteger(y = (c - a*x)/b)){
            res.push([x,y]);
        }
    }
    x_pic,y_pic = res[Math.random() * res.length];
}

function keyPressed() {
    if (keyCode === ENTER) {
        inp_x.input(CompareEventX);
        inp_y.input(CompareEventY);
    } 
  }

function CompareEventX(){
    if (this.value > x_pic)
    {
        text(">", 50, 150);
    }
    else if (this.value < x_pic)
    {
        text("<", 50, 150);
    }
    else 
    {
        text("This one is right!", 50, 150);
    }
}  

function CompareEventY(){
    if (this.value > y_pic)
    {
        text(">", 50, 150);
    }
    else if (this.value < y_pic)
    {
        text("<", 50, 150);
    }
    else 
    {
        text("This one is right!", 50, 150);
    }
}  

// function Increment() {
// k++;
// }

function draw() {
clear();
background("green");
textSize(20);

let eq = a.toString() + "*x+"+b.toString()+"*y="+c.toString();

text("Enter x and y value that satisfies this equation, then press ENTER: " + k, 50, 150);
}
