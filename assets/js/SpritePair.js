function SpritePair(filePath,xpos,ypos,size,d) 
{
	this.meteorSprite =new Sprite(filePath+"meteor-sprite-animation.png",19,4,5);
	this.explosionSprite =new Sprite(filePath+"explosion-sprite-sheet.png",24,5,5);
	
	this.spriteImage=this.meteorSprite;
	this.exploding=false;
	this.delay=d;
	this.x=xpos;
	this.y=ypos;
	this.size=size;
	this.hit=false;
}
SpritePair.prototype.updateSprite = function() 
{
	if(this.spriteImage.ready==true)
	{
		
		this.spriteImage.updateSprite();
	}
		
};

SpritePair.prototype.drawSprite = function(context)
{
	this.spriteImage.drawSprite(this.x, this.y,this.size,this.size,context);
};

SpritePair.prototype.changeToExplosion = function() 
{
	this.spriteImage=this.explosionSprite;
	this.exploding=true;
};