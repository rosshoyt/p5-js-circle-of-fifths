// Constants
const NOTENAMES_SHARP =
				[ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", ];
const NOTENAMES_FLAT =
				[ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", ];
const TEXT_XOFFSETS =
				[ ];
const TEXT_YOFFSETS =
				[ ];

// View Vars
let viewSharps = true; // Default to show Sharps
let buttonFlat, buttonSharp;
// Circleoffifths dimension Vars
slice = 2 * Math.PI / 12;

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
	fill(c);
	noStroke();
	// Paint background circle
	circle(circleX, circleY, circleDiameter);

	// TEXT PROPS
	let textColor = color(255, 255, 255);
	fill(textColor);
	noStroke();
	textSize(40);


	// Positional Variables
	let textOffset = 10;
	let startingLocation = 9;
	let counter = 0;
	for(let i = 0; i <= 12; i++) {
			let angle = slice * startingLocation;
			let newX = circleX + circleDiameter * Math.cos(angle);
      let newY = circleY + circleDiameter * Math.sin(angle);
			// Draw Line if present in chord (development state = true)
			if(true)line(circleX, circleY, newX, newY);
			stroke(0);
			// Print noteName
			var noteNames = viewSharps ? NOTENAMES_SHARP : NOTENAMES_FLAT;
			//text(noteNames[i], newX - TEXT_XOFFSETS[i], newY + TEXT_YOFFSETS[i]);
			text(noteNames[i], newX - textOffset, newY + textOffset);
			startingLocation = (startingLocation + 1) % 12;
	}
}
