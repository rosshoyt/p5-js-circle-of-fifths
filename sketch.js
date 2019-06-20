// Constants
const NOTENAMES_SHARP =
				[ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", ];
const NOTENAMES_FLAT =
				[ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", ];

// View Vars
let viewSharps = true; // Default to show Sharps
let buttonFlat, buttonSharp;
// Circleoffifths dimension Vars
slice = 2 * Math.PI / 12;

function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0, 0, 200);
	textSize(15);

	// Set circle dimensions
	let circleX = windowWidth / 2;
	let circleY = windowHeight / 2;
	let circleDiameter = (circleY > circleX) ? circleX : circleY;
	let circleRadius = circleDiameter / 2;
	// Set circle color
	let c = color(255, 204, 0);
	fill(c);
	noStroke();
	// Paint background circle
	circle(circleX, circleY, circleDiameter);



	let startingLocation = 0;
	let counter = 0;
	for(let i = 0; i <= 12; i++) {
			let angle = slice * startingLocation;
			let newX = circleX + circleDiameter * Math.cos(angle);
      let newY = circleY + circleDiameter * Math.sin(angle);
			// Draw Line
			line(circleX, circleY, newX, newY);
			stroke(0);
			// Draw noteName
			//var noteNames = viewSharps ? NOTENAMES_SHARP : NOTENAMES_FLAT;
			//text();


			startingLocation = (startingLocation + 1) % 12;
	}
}
