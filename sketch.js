// Constants
const NOTENAMES_SHARP =
				[ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", ];
const NOTENAMES_FLAT =
				[ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", ];
const TEXT_XOFFSETS =
				[ ];
const TEXT_YOFFSETS =
				[ ];
const BUTTON1_LABEL = "SHARP #/FLAT b";
const BUTTON2_LABEL = "CHROMATIC/    FIFTH";

// Sound params
//let notesPressed = new Array(12).fill(false);
let notesPressed = new Set();

let KEY_PRESSED_VALS = [ 65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75 ];

// View Vars
let viewSharps = true, orderChromatic = false; // Default to show Sharps
let button_sharpFlat, button_chromaticFifth
// Circleoffifths dimension Vars
let slice = 2 * Math.PI / 12;

function setup() {
	createCanvas(windowWidth, windowHeight);
	button_sharpFlat = createButton(BUTTON1_LABEL);
  button_sharpFlat.position( 20, 20, 80);
  button_sharpFlat.mousePressed(swapSharpsFlats);

	button_chromaticFifth = createButton(BUTTON2_LABEL);
  button_chromaticFifth.position( 20, 45, 65);
  button_chromaticFifth.mousePressed(swapChromaticFifth);
}
function swapSharpsFlats(){
	viewSharps = !viewSharps;
}
function swapChromaticFifth(){
	orderChromatic = !orderChromatic;
}

function draw() {
  background( 0, 0, 0);


	// Set circle dimensions
	let circleX = windowWidth / 2;
	let circleY = windowHeight / 2;
	let circleDiameter = ((circleY > circleX) ? circleX : circleY) * 2 / 3;
	let circleRadius = circleDiameter / 2;
	// Set circle color
	let c = color( 250, 250, 210);
	// Set circle2 dimensions
	let bgd_circleX = circleX;
	let bgd_circleY = circleY;
	let bgd_circleDiameter = ((circleY > circleX) ? circleX : circleY) * 9/10;
	let bgd_circleRadius = bgd_circleDiameter / 2;
	// Set circle color
	let bgd_circleColor = color(70, 240, 210);

	// Set circle3 (INVISIBLE)
	let txt_DispCircleX = circleX;
	let txt_DispCircleY = circleY;
	let txt_DispCircleDiameter = ((circleY > circleX) ? circleX : circleY) * 9/10;
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
	let textColor = color(240, 240, 240);
	fill(textColor);
	//noStroke();
	textSize(windowHeight / 15);


	// Positional Variables
	let textOffset = //(bgd_circleRadius - circleRadius) / 100;
	let startingLocation = 9;

	let counter = 0;
	for(let i = 0; i <= 12; i++) {

			let angle = slice * startingLocation;
			// Generate lineX
			let lineX = circleX + circleDiameter * Math.cos(angle);
      let lineY = circleY + circleDiameter * Math.sin(angle);

			// Generate lineX
			let textX = (circleX + txt_DispCircleDiameter * Math.cos(angle)) - 10;
      let textY = circleY + txt_DispCircleDiameter * Math.sin(angle);

			let pitch = i * 7 % 12;
			// Draw Line if present in chord (development state = true)
			if(notesPressed.has(pitch)) line(circleX, circleY, lineX, lineY);


			//if(true) line(circleX, circleY, lineX, lineY);
			stroke(0);
			// Print noteName
			var noteNames = viewSharps ? NOTENAMES_SHARP : NOTENAMES_FLAT;
			//text(noteNames[i], lineX - TEXT_XOFFSETS[i], lineY + TEXT_YOFFSETS[i]);
			if(orderChromatic) text(noteNames[i], textX	 - textOffset, textY);
			if (!orderChromatic){
				text(noteNames[pitch], textX - textOffset, textY);
				pitch += 7;
			}
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
