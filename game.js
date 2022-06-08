import {generate} from './generate.js';
let a,b,c = generate();
let k =0;
let x_pic,y_pic;

function setup() {
createCanvas(800, 800);

FindSolutions()
let inp_x = createInput('');
inp_x.position(200, 200);
inp_x.size(100);
let inp_y = createInput('');
inp_y.position(200, 250);
inp_y.size(100);
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
    for (let x = 1; x <= 1000; x++){
        if (Number.isInteger(y = (c - a*x)/b) && (c - a*x)/b > 0){
            res.push([x,y]);
        }
    }
    [x_pic, y_pic] = res[Math.random() * (res.length - 1)];
}

function keyPressed() {
    if (inp_x.value.length == 0 || inp_y.value.length == 0) text("One of the fields is empty", 50, 350);
    else if (keyCode === ENTER) {
        inp_x.input(CompareEventX);
        inp_y.input(CompareEventY);
    } 
  }

function CompareEventX(){
    if (this.value > x_pic)
    {
        text(">", 50, 200);
    }
    else if (this.value < x_pic)
    {
        text("<", 50, 200);
    }
    else 
    {
        text("This one is right!", 50, 200);
    }
}  

function CompareEventY(){
    if (this.value > y_pic)
    {
        text(">", 50, 250);
    }
    else if (this.value < y_pic)
    {
        text("<", 50, 250);
    }
    else 
    {
        text("This one is right!", 50, 250);
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

text("Enter x and y value that satisfies this equation, then press ENTER:\n " + eq, 50, 350);
}