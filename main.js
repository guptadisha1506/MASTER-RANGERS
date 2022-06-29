
var canvas= new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_Image (get_Image)
{
	fabric.Image.fromURL(get_Image, function (Img) 
	{ 
		block_image_object = Img;
		block_image_object.scaleToWidth (block_image_width); 
		block_image_object.scaleToHeight (block_image_height);
		block_image_object.set({
		top:block_y,
		left:block_x
		});
		canvas.add(block_image_object);
	});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_Image("rr1.png");
		console.log("R");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_Image("gr.png");
		console.log("G");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_Image("yr.png");
		console.log("Y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_Image("pr.png");
		console.log("P");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_Image("br.png");
		console.log("B");
	}
	
}

