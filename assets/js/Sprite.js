function Sprite(imageLocation,numberOfFrames,spriteRows,spriteColumns) 
{
	var self=this;
	
	this.numberOfFrames=numberOfFrames;
	this.index=0;
	this.xpos=0;
	this.ypos=0;
	this.imageWidth=0;
	this.imageHeight=0;
	this.ready=false;
	
	this.image= new Image();
    this.image.src = imageLocation;
	this.image.onload = function() 
	{	
		
		self.imageHeight =self.image.height/spriteRows;
		self.imageWidth = self.image.width/spriteColumns;
		//self.imageHeight = 320/5;
		//self.imageWidth = 320/5;
		self.ready=true;  
		//alert("image function is done");		
	}
	
	//alert("instance created");
	
}
Sprite.prototype.updateSprite = function() {
		//increase the index so we know which frame of our animation we are currently on
//alert("sprite function");
    if(this.ready==false)
			return;
		
		//each time around we add the frame size to our xpos, moving along the source image
		this.xpos += this.imageWidth;
		this.index += 1;
		
		//if our index is higher than our total number of frames, we're at the end and better start over
		//alert("numberOfFrames is "+this.numberOfFrames);
		//alert("numberOfFrames is "+this.numberOfFrames);
		if (this.index >= this.numberOfFrames) {
			this.xpos =0;
			this.ypos =0;
			this.index=0;    
		//if we've gotten to the limit of our source image's width, we need to move down one row of frames                
		} else if (this.xpos + this.imageWidth > this.image.width){
			this.xpos =0;
			this.ypos += this.imageHeight;
		}
		
};

Sprite.prototype.drawSprite = function(x,y,width,height,context)
{
	
	if(this.ready==true)
	{
		//alert("yo");
		/*
			our big long list of arguments below equates to: 
				1: our image source
				2 - 5: the rectangle in the source image of what we want to draw
				
				6 - 9: the  rectangle of our canvas that we are drawing into
				
				the area of the source image we are drawing from will change each time loop() is called.
				the rectangle of our canvas that we are drawing into however, will not. 
				tricky!
			*/
			
		context.drawImage(
		this.image, 
		this.xpos, 
		this.ypos, 
		this.imageWidth, 
		this.imageHeight, 
		x, y, width,height);
		//alert("drawn");
	}
};