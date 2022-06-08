let k =0;
function setup() {
createCanvas(400, 400);

// Create buttons for creating
// and removing the canvas

createBtn = createButton("Press me");
createBtn.position(200, 200);
createBtn.mouseClicked(Increment);
}


function Increment() {
k++;
}

function draw() {
clear();
background("green");
textSize(20);

text("Ouch, you hit me: " + k, 50, 150);
}
