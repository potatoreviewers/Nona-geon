let a,b,c;
let k =0;
let x_pic,y_pic;
let x_less = 0, y_less = 0, x_more = 0, y_more = 0, x_done =0, y_done =0, error =0;
let inp_x, inp_y;



function setup() {
createCanvas(800, 800);

generate();
FindSolutions();
inp_x = createInput('');
inp_x.position(200, 200);
inp_x.size(100);
inp_y = createInput('');
inp_y.position(200, 250);
inp_y.size(100);
// Create buttons for creating
// and removing the canvas

// createBtn = createButton("Press me");
// createBtn.position(200, 200);
// createBtn.mouseClicked(Increment);
}

function generate() {
     a = Math.floor(Math.random() * 1000);
     b = Math.floor(Math.random() * 1000);
     x_1 = Math.floor(Math.random() * 1000);
     y_1 = Math.floor(Math.random() * 1000);

     c = a*x_1 + b*y_1;
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
    [x_pic, y_pic] = res[floor(Math.random() * (res.length-1))];
}

function keyPressed() {
    error = 0;
    if (inp_x.value().length == 0 || inp_y.value().length == 0){
        error = 1;
    }
    else if (keyCode === ENTER) {
        CompareEventX();
        CompareEventY();
    } 
  }

function CompareEventX(){
    x_more = 0, x_less = 0, x_done = 0;
    if (inp_x.value() > x_pic)
    {
        x_more = 1;
    }
    else if (inp_x.value() < x_pic)
    {
        x_less = 1;
    }
    else 
    {
        x_done = 1;
    }
}  

function CompareEventY(){
    y_more = 0, y_less = 0, y_done = 0;
    if (inp_y.value() > y_pic)
    {
        y_more = 1;
    }
    else if (inp_y.value() < y_pic)
    {
        y_less = 1;
    }
    else 
    {
        y_done = 1;
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

if (error){
    text("One of the fields is empty", 50, 350);
}

if (x_more){
    text(">", 50, 200);
}
else if (x_less){
    text("<", 50, 200);
}
else if (x_done){
    text("This one is right!", 50, 200);
}
if (y_more){
    text(">", 50, 250);
}
else if (y_less){
    text("<", 50, 250);
}
else if (y_done){
    text("This one is right!", 50, 250);
}
text("Enter x and y (1<=x,y<=1000) value that satisfies this equation, then press ENTER:\n " + eq, 10, 100);
}
