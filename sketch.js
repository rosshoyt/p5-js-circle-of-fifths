// Constants
const NOTENAMES_SHARP =
				[ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", ];
const NOTENAMES_FLAT =
				[ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", ];
const TEXT_XOFFSETS =
				[ ];
const TEXT_YOFFSETS =
				[ ];

// Sound params
//let notesPressed = new Array(12).fill(false);
let notesPressed = new Set();

let KEY_PRESSED_VALS = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75 ];

// View Vars
let viewSharps = true; // Default to show Sharps
let buttonFlat, buttonSharp;
// Circleoffifths dimension Vars
let slice = 2 * Math.PI / 12;

function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0, 0, 0);


	// Set circle dimensions
	let circleX = windowWidth / 2;
	let circleY = windowHeight / 2;
	let circleDiameter = ((circleY > circleX) ? circleX : circleY) * 2 / 3;
	let circleRadius = circleDiameter / 2;
	// Set circle color
	let c = color(190, 190, 190);
	// Set circle2 dimensions
	let bgd_circleX = circleX;
	let bgd_circleY = circleY;
	let bgd_circleDiameter = ((circleY > circleX) ? circleX : circleY) * 7 / 8;
	let bgd_circleRadius = bgd_circleDiameter / 2;
	// Set circle color
	let bgd_circleColor = color(70, 240, 210);

	// Set circle3 (INVISIBLE)
	let txt_DispCircleX = circleX;
	let txt_DispCircleY = circleY;
	let txt_DispCircleDiameter = ((circleY > circleX) ? circleX : circleY) * 4 / 5;
	let txt_DispCircleRadius = circleDiameter / 2;
	// Paint bgd circle
	fill(bgd_circleColor);
	noStroke();
	circle(bgd_circleX, bgd_circleY, bgd_circleDiameter);


	// Paint circle#2 Main
	fill(c);
	noStroke();
	circle(circleX, circleY, circleDiameter);



	// TEXT PROPS
	let textColor = color(255, 255, 255);
	fill(textColor);
	//noStroke();
	textSize(40);


	// Positional Variables
	let textOffset = 10;
	let startingLocation = 9;
	let counter = 0;
	for(let i = 0; i <= 12; i++) {
			let angle = slice * startingLocation;
			// Generate lineX
			let lineX = circleX + circleDiameter * Math.cos(angle);
      let lineY = circleY + circleDiameter * Math.sin(angle);

			// Generate lineX
			let textX = circleX + txt_DispCircleDiameter * Math.cos(angle);
      let textY = circleY + txt_DispCircleDiameter * Math.sin(angle);

			// Draw Line if present in chord (development state = true)
			if(notesPressed.has(i))line(circleX, circleY, lineX, lineY);
			//if(true) line(circleX, circleY, lineX, lineY);
			stroke(0);
			// Print noteName
			var noteNames = viewSharps ? NOTENAMES_SHARP : NOTENAMES_FLAT;
			//text(noteNames[i], lineX - TEXT_XOFFSETS[i], lineY + TEXT_YOFFSETS[i]);
			text(noteNames[i], textX	 - textOffset, textY + textOffset);
			startingLocation = (startingLocation + 1) % 12;
	}
}

function keyPressed() {
	if(KEY_PRESSED_VALS.includes(keyCode)){
		//notesPressed[KEY_PRESSED_VALS.indexOf(keyCode)] == true;
		notesPressed.add(KEY_PRESSED_VALS.indexOf(keyCode));
		console.log("Scale key pressed #" + KEY_PRESSED_VALS.indexOf(keyCode));
		console.log(notesPressed);
	} else return false;
}
function keyReleased() {
	if(KEY_PRESSED_VALS.includes(keyCode)){
		//notesPressed[KEY_PRESSED_VALS.indexOf(keyCode)] == false;
		notesPressed.delete(KEY_PRESSED_VALS.indexOf(keyCode));
		console.log("Scale key released");
		console.log(notesPressed);
	} else return false;
	return false;
}
