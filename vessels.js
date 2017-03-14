
var x = 0;
var y = 0;
var img;
var img2;
    
function setup(){
    
	createCanvas(720, 600);
	img = loadImage("vessel2.jpg");
	img2= loadImage("vessel3.jpg");
}


function draw(){
    
	tint(255, x);
	
	image(img, 0, 0);
	
	tint(255, 255 - x);
	
	image(img2, 0, 0);
	
}

function mouseWheel(){
	
	print(event.delta);
	
	x += (event.delta*.1);
	
}
