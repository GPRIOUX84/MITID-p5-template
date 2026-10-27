
//variable name                    id of the button in html
let randombutton = document.querySelector("#randomize");

randombutton.addEventListener("click", function(){
    background(73);
    generateStacks();
});

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    //to get rid of the borders
    noStroke();
    background(73);
    generateStacks(6);
}

function draw(){
    // function that runs repeatedly
    

    //we call the function
    // stackOfCircles(100, 200, "#F000E0");
    // stackOfCircles(400, 300, "#15184e");

    

}
//we create a function to generate stacks
function generateStacks(stacksAmount){
    //we creat a loop to generate 10 stacks
    for(let i = 0; i < stacksAmount; i = i + 1){
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomColor = random(0, 255);
        stackOfCircles(randomX, randomY, randomColor);
    }
}

// we create a function to display a stack of circles
function stackOfCircles(posX, posY, color){
    fill(color);
    for(let i = 0; i < stacksAmount; i = i + 1){
        circle(posX, posY + i*10, 20);
    }
}

//a function that is trigerred when the mouse is pressed
function mousePressed(){
    fill(255, 0, 0);
    circle(mouseX, mouseY, 50);
}