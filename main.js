img = "";
x = "";
y = "";
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600,300);
video.parent('game_console');
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
if (y < 150) {
	marioY = marioY-1;
}
if (x < 300) {
	marioX = marioX-1;
}
if (x > 300) {
	marioX = marioX+1;
}
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		x = results[0].pose.nose.x;
		y = results[0].pose.nose.y;
	}
}

function modelLoaded() {
	console.log("modelLoaded");
}






