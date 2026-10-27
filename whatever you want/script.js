let buttons = [];
let changeBackground = false;
let backgroundColor = [255, 0, 100];
//create the buttons
function setup() {
    createCanvas(windowWidth, windowHeight);

    buttons = [
        createButton('Gabriel est un génie'),
        createButton('Gabriel est une merde')
    ];

    buttons.forEach((button) => {
        button.size(90, 40);
        button.style('font-size', '16px');
    });
    // Change background when Button 1 is clicked
    buttons[0].mousePressed(() => {
    changeBackground = true;
    });
    // Add the click event to Button 2
    buttons[1].mouseOver(() => {
        const buttonWidth = 90;
        const buttonHeight = 40;

        const randomX = random(0, width - buttonWidth);
        const randomY = random(0, height - buttonHeight);

        buttons[1].position(randomX, randomY);
    });

    positionButtons();

}

function draw() {
    background(
        backgroundColor[0],
        backgroundColor[1],
        backgroundColor[2]
    );
}
//position the buttons in the center of the screen
function positionButtons() {
	//calculate the total width of the buttons and the gap between them
    const gap = 20;
	const buttonWidth = 90;
	const totalWidth = buttonWidth * buttons.length + gap;
	const startX = (width - totalWidth) / 2;
	const y = height / 2 - 20;

    //position each button
	buttons.forEach((button, index) => {
		button.position(startX + index * (buttonWidth + gap), y);
	});
}
//resize the canvas and reposition the buttons when the window is resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	positionButtons();
}
setInterval(() => {
    if (changeBackground) {
        backgroundColor = [
            random(255),
            random(255),
            random(255)
        ];
    }
}, 250);