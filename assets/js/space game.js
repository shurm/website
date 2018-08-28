
var filePath="assets/images/space_game/"

//limit is 6
var asteroidSpeed=2;
var asteroidSpeedLimit=6;
var timeIntervalUntilNextFrame=10;
var asteroidsToDestoryBeforeItGetsHarder = 8;
var asteroidAnimationFrameDelay=2;
var laserBlastSpeed=20;
var lives;
var gameOverTextSize=60;

var maxAsteroidsOnScreen=10;

//limit is 1500
var timeIntervalForAsteroidSpawning = 2500;
var timeLimitForAsteroidSpawning = 1500;



var frameRateForAsteroidSpawn=timeIntervalForAsteroidSpawning/timeIntervalUntilNextFrame;


var canvas = document.getElementById("myCanvas");


var ctx = canvas.getContext("2d");


var scoreTextSize=canvas.width/25;

var currentScore=0;
var earthBackgroundHeight=180;


var numberOfAsteroidsDestroyed=0;

var asteroidSize = 50;


var laserHasBeenFired=false;


var framesLeftUntilNextAsteroidSpawn=frameRateForAsteroidSpawn;

var laserStartingRotation=110;
var additionalLaserRotation=1;

var theta =0;
var sideLength=0;

var laserX=0;
var laserY=0;
var laserGunWidth=40;
var laserGunHeight=100;

var blastX=null;
var blastY=null;
var laserBlastWidth=laserGunWidth*2/4;
var laserBlastHeight=laserGunHeight*2/4;
var blastRotation=null;

var laserStandWidth=50;
var laserStandHeight=60;

var laserCenterX=canvas.width/2-laserStandWidth/2;
var laserCenterY=canvas.height-60;


var asteroids=[];
var explosions=[];
var corrospondingExplosionFrames=[];
var totalExplosionFrames=24;
var gameOver;

var laser= new Image();
laser.src = filePath+"laser.png";

var laser_blast= new Image();
laser_blast.src = filePath+"laser_blast.png";

var laserStand= new Image();
laserStand.src = filePath+"laser_stand.png";


var starryBackground= new Image();
starryBackground.src = filePath+"starry-background.jpg";


var earthBackground;

var gameVariable;

function asteroidGame()
{
	gameOverFunction();
	
	earthBackground=new Sprite(filePath+"Earth-Sprite-Sheet.png",4,4,1);
	//document.getElementById("myCanvas");
	asteroids=[];
	explosions=[];
	corrospondingExplosionFrames=[];
	lives=3;
	gameOver=false;
	laserHasBeenFired=false;
	currentScore=0;
	numberOfAsteroidsDestroyed=0;
	
	
	createAsteroidsArray();


	ctx.translate(laserCenterX, laserCenterY);


	ctx.drawImage(laserStand,0-laserStandWidth/2,0-laserStandHeight/2,laserStandWidth,laserStandHeight);
	
	
	ctx.drawImage(laser,laserX-laserGunWidth/2,laserY+laserStandWidth/2-5,laserGunWidth,laserGunHeight);
	
	
	// reset current transformation matrix to the identity matrix
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	
	
	canvas.addEventListener("mousemove", moveLaser);
	canvas.addEventListener("click", fireLaser);
	gameVariable=setInterval(drawStuff,timeIntervalUntilNextFrame);
}

function NumberTriple(value, delta, limit) 
{
  this.value = value;
  this.delta = delta;
  this.limit = limit;
}

function gameOverFunction()
{
	clearInterval(gameVariable);
	canvas.removeEventListener("mousemove", moveLaser);
	canvas.removeEventListener("click", fireLaser);
}

function createAsteroidsArray()
{
	var a=0;
	
	for(a=0;a<maxAsteroidsOnScreen;a++)
	{
		asteroids.push(null);
		
		explosions.push(null);
		
		corrospondingExplosionFrames.push(0);
	}
}

function calculateRotation(evt)
{

	var radius=laserStandWidth;
	
	var rect= canvas.getBoundingClientRect();
	var mouseX=evt.clientX-rect.left;
	var mouseY=evt.clientY-rect.top;
	
	var centerY=laserCenterY;
	var centerX=laserCenterX;
	
	var slope=(centerY-mouseY)/(centerX-mouseX);

	var Y_intercept=centerY-slope*centerX;
	
	

	//(m^2+1)*x^2+(2*b*m-2*k*m-2*h)*x+((b-k)^2+h^2-r^2)
	var a=(Math.pow(slope,2)+1);

	

	//cant handle parathesis on the outside
	var b=2*Y_intercept*slope-2*centerY*slope-2*centerX;
	
	
	var c=Math.pow((Y_intercept - centerY),2)+Math.pow(centerX,2)-Math.pow(radius,2);
	
	
	//var newX=Math.pow(b,2)-4*a*c; using the quadratic formula
	var newX;
	if(mouseX>centerX)
		newX=((-1)*b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
	else
		newX=((-1)*b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
		
	var newY=newX*slope+Y_intercept;
	var hDegrees=Math.atan((newY-centerY)/(newX-centerX))*180/Math.PI;
	var diff=laserStartingRotation-90;
	if(mouseX<centerX)
	{
		if(hDegrees<diff)
			hDegrees=0;
		else
		{
			hDegrees=hDegrees-diff;
		}
	}
	else if(mouseX>centerX)
	{
		hDegrees*=(-1);
		hDegrees=180-hDegrees;
		if(hDegrees>(270-laserStartingRotation))
		{
			hDegrees=(270-laserStartingRotation)-diff;
		}
		else
		{
			hDegrees=hDegrees-diff;
		}
	}
	else
	{
		if(mouseY<centerY)
			hDegrees=180-laserStartingRotation;
	}
	return hDegrees;
}

function moveLaser(evt)
{

	if(gameOver==false)
	{
		laserY=0;
		
		
		
		additionalLaserRotation=calculateRotation(evt);
		
		if(additionalLaserRotation<=40 || additionalLaserRotation>=110)
			laserY-=5;
	}
}

function fireLaser(evt)
{
	if(gameOver==false)
	{
		if(laserHasBeenFired==false)
		{
			
			laserHasBeenFired=true;
			blastX=laserX-laserBlastWidth/2;
			blastY=laserY+laserGunHeight;
		
			blastRotation=laserStartingRotation+additionalLaserRotation;
			
			theta=blastRotation+90;
			
			sideLength=blastY;	
			
		}
	}
}


function addAsteroid()
{
	var t1=(canvas.width-asteroidSize+1);
	
	var randomIntialX=Math.floor(Math.random()*t1);
	var q=new SpritePair(filePath,randomIntialX,0-asteroidSize,asteroidSize,asteroidAnimationFrameDelay);
	
	var a=0;
	
	for(a=0;a<asteroids.length;a++)
	{
		if(asteroids[a]==null)
		{		
			asteroids[a]=q;
			break;
		}
	}
	
}


function hasHitTheEarth(asteroid)
{
	var end = canvas.height-asteroid.size;
	if(asteroid.y>=end)
	{
		return true;
	}
	return false;
}

function isLaserOffScreen()
{
	if(blastY>500)
		return true;
	return false;
}

//draws the asteroids 
function drawAsteroids()
{
	var a;
	for(a=0;a<asteroids.length;a++)
	{
		if(asteroids[a]!=null)
		{
		
			if(asteroids[a].exploding==true)
			{
				var b;
				for(b=0;b<explosions.length;b++)
				{
					if(explosions[b]==null)
					{
						explosions[b]=asteroids[a];
						corrospondingExplosionFrames[b]=0;
						asteroids[a]=null;
						break;
					}
				}
					
				continue;
			}
			
			asteroids[a].drawSprite(ctx);
			if(asteroids[a].delay==0)
			{
				asteroids[a].updateSprite();
				
				
				if(gameOver==false)
					asteroids[a].y+=asteroidSpeed;
				
				asteroids[a].delay=asteroidAnimationFrameDelay;
				if(hasHitTheEarth(asteroids[a]))
				{
					earthBackground.updateSprite();
					
					asteroids[a]=null;
					
					lives--;
					
					if(lives==0)
					{
						gameOver=true;
					}
				}
				
			}
			else{
				asteroids[a].delay=asteroids[a].delay-1;
			}
		}
	}
}


function drawExplosions()
{
	var a;
	for(a=0;a<explosions.length;a++)
	{
		if(explosions[a]!=null)
		{
			explosions[a].drawSprite(ctx);
			
			if(explosions[a].delay==0)
			{
				explosions[a].updateSprite();
				corrospondingExplosionFrames[a]++;
				
				if(corrospondingExplosionFrames[a]==totalExplosionFrames)
				{
					
					explosions[a]=null;
					
					corrospondingExplosionFrames[a]=0;
					
					continue;
				}
				explosions[a].delay=asteroidAnimationFrameDelay;
			}
			else{
				explosions[a].delay=explosions[a].delay-1;
			}
		}
	}
}

//checks if it is time to create a new asteroid
function timeToCreateANewAsteroid()
{
	if(framesLeftUntilNextAsteroidSpawn<=0)
	{
		return true;
	}
	return false;
}

function hitAAsteroid(lazorTopLeftX,lazorTopLeftY,lazorTopRightX,lazorTopRightY)
{

	//checks all the asteroids on screen
	var a;
	for(a=0;a<asteroids.length;a++)
	{
		var currentAsteroid = asteroids[a];
		
		if(currentAsteroid!=null && currentAsteroid.exploding==false )
		{
			//the coordinates representing the center of the currentAsteroid
			var centerX=currentAsteroid.x+asteroidSize/2;
			var centerY=currentAsteroid.y+asteroidSize/2;
			
			
			
			if(asteroidTest(centerX,centerY,lazorTopLeftX,lazorTopLeftY)==true || 
			asteroidTest(centerX,centerY,lazorTopRightX,lazorTopRightY)==true )
			{
				currentAsteroid.changeToExplosion();
				
				numberOfAsteroidsDestroyed++;
				
				if(numberOfAsteroidsDestroyed==6)
				{
					frameRateForAsteroidSpawn = frameRateForAsteroidSpawn*2/3;
				}
				return true;
			}	
			
		}
	}
	return false;
}


function computeRoots(x,y)
{

	var mTop = laserCenterY-y;
	var mBottom = laserCenterX-x;
	
	var slope= (-1)*mBottom/mTop;
	
	//y=mx+b
	
	var b2= y-slope*x;
	
	// d= sqrt((x2-x1)^2+(y2-y1)^2)
	
	// d= sqrt((x2-x1)^2+(x2*m+b-y1)^2)
	
	//let j=b-y1
	
	//d^2= (x2^2-2*x2*x1+x1^2)+ ( m^2*x2^2+ 2*j*m*x2 + j^2 )
	
	//a=m^2+1
	//b=2*j*m-2*x1
	//c=j^2+x1^2-d^2
	
	//(-1)*b+-sqrt(b^2-4*a*c)/(2*a)
	
	
	var w=(laserBlastWidth*2/5)
	var j=b2-y;
	
	var a=slope*slope+1;
	var b=2*j*slope-2*x;
	var c=j*j+x*x-w*w;
	
	
	var root1= ((-1)*b+Math.sqrt(b*b-4*a*c))/(2*a);
	
	var root2= ((-1)*b-Math.sqrt(b*b-4*a*c))/(2*a);
	
	
	var y1= root1*slope+b2;
	
	var y2= root2*slope+b2;
	
	var returnArray=[0,0,0,0];
	
	returnArray[0]=root1;
	
	returnArray[1]=y1;
	
	returnArray[2]=root2;
	
	returnArray[3]=y2;
	
	
	return returnArray;
}

function asteroidTest(asteroidCenterX,asteroidCenterY, lazorTopX,lazorTopY)
{

	var diff=laserBlastHeight;
	var x=lazorTopX;
	var y=lazorTopY;
	
	var i;
	
	var f=Math.floor(laserBlastHeight/asteroidSize);
	
	var distance;
	
	var array;
	
	for(i=0;i<f;i++)
	{
		distance=Math.sqrt((asteroidCenterX-x)*(asteroidCenterX-x)+(asteroidCenterY-y)*(asteroidCenterY-y));
		
		if(distance<asteroidSize/2)
			return true;	
	
	
		diff-=asteroidSize;
		
		array=computeRoots(laserCenterX+(blastY+diff)*Math.cos(toRadians(theta)),
		laserCenterY+(blastY+diff)*Math.sin(toRadians(theta)));
		if(array[3]>array[1])
		{
			x=array[2];
			y=array[3];
		}
		else
		{
			x=array[0];
			y=array[1];
		}
	}
	
	var array=computeRoots(laserCenterX+(blastY)*Math.cos(toRadians(theta)),laserCenterY+(blastY)*Math.sin(toRadians(theta)));
	if(array[3]>array[1])
	{
		x=array[2];
		y=array[3];
	}
	else
	{
		x=array[0];
		y=array[1];
	}
	
	distance=Math.sqrt((asteroidCenterX-x)*(asteroidCenterX-x)+(asteroidCenterY-y)*(asteroidCenterY-y));
		
	if(distance<asteroidSize/2)
		return true;

	return false;
}



function drawStuff()
{
	// reset current transformation matrix to the identity matrix
	//resets the canvas
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0,0,canvas.width,canvas.height);

	
	
	//draws star background
	ctx.drawImage(starryBackground,0,0,canvas.width,canvas.height);
	
	
	
	
	//draws the earth 
	earthBackground.drawSprite(0, (canvas.height-earthBackgroundHeight), 
		canvas.width, 
		earthBackgroundHeight,ctx);
		
		
	if(gameOver==false)
	{
		if(timeToCreateANewAsteroid()==true)
		{
			addAsteroid();
			framesLeftUntilNextAsteroidSpawn=frameRateForAsteroidSpawn;
			
		}
		else
		{
			framesLeftUntilNextAsteroidSpawn--;
		}
	}
	
	drawAsteroids();
	
	drawExplosions();
	
	ctx.translate(laserCenterX, laserCenterY);

	ctx.drawImage(laserStand,0-laserStandWidth/2,0-laserStandHeight/2,laserStandWidth,laserStandHeight);
	
		
	
	//draws the laser
	if(laserHasBeenFired==true)
	{
		ctx.rotate(toRadians(blastRotation));
		ctx.drawImage(laser_blast,blastX,blastY,laserBlastWidth,laserBlastHeight);
		
		
		
		
		if(isLaserOffScreen())
		{
			laserHasBeenFired=false;
		}
		
		
		//ctx.rotate((-1)*blastRotation* Math.PI / 180);
		
		ctx.setTransform(1, 0, 0, 1, 0, 0);
	
		var lowerPoints=computeRoots(laserCenterX+(blastY)*Math.cos(toRadians(theta)),
		laserCenterY+(blastY)*Math.sin(toRadians(theta)));

	
		var upperPoints=computeRoots(laserCenterX+(blastY+laserBlastHeight)*Math.cos(toRadians(theta)),laserCenterY+(blastY+laserBlastHeight)*Math.sin(toRadians(theta)));
		
		
		var lazorTopLeftX=0,lazorTopLeftY=0,lazorTopRightX=0,lazorTopRightY=0;
		
		if(upperPoints[0]<upperPoints[2])
		{
			lazorTopLeftX=upperPoints[0];
			lazorTopLeftY=upperPoints[1];
			lazorTopRightX=upperPoints[2];
			lazorTopRightY=upperPoints[3];
		}
		else
		{
			lazorTopLeftX=upperPoints[2];
			lazorTopLeftY=upperPoints[3];
			lazorTopRightX=upperPoints[0];
			lazorTopRightY=upperPoints[1];
		}
		
		
		if(hitAAsteroid(lazorTopLeftX,lazorTopLeftY,lazorTopRightX,lazorTopRightY)==false)
			blastY+=laserBlastSpeed;
		else
		{
			laserHasBeenFired=false;
			currentScore+=50;
		}	
		ctx.translate(laserCenterX, laserCenterY);
	}	

	
	
	
	ctx.rotate(toRadians(laserStartingRotation));
	
	ctx.rotate(toRadians(additionalLaserRotation));
	
	
	//draws the laserGun
	ctx.drawImage(laser,laserX-laserGunWidth/2,laserY+laserStandWidth/2-5,laserGunWidth,laserGunHeight);
	
	
	
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	
	
	if(gameOver==false)
	{
		drawScoreText();
	}
	else
	{
	
		ctx.fillStyle="black";
		ctx.fillRect(0,canvas.height/3,canvas.width,canvas.height/3);
		
		ctx.font = gameOverTextSize+'pt Calibri';
		
		ctx.fillStyle="red";
		
		ctx.fillText("Game Over", 10, canvas.height/3+gameOverTextSize+10); 
		
		ctx.fillStyle="white";
		
		ctx.font = (2*scoreTextSize)+'pt Calibri';
		
		ctx.fillText("Score: "+currentScore, 10, canvas.height/3+gameOverTextSize+10+gameOverTextSize );
		
		gameOverFunction();
	}
	

}

function drawScoreText()
{
	ctx.font = scoreTextSize+'pt Calibri';
	ctx.lineWidth = 2;

	// stroke color
	ctx.strokeStyle = 'white';
	
	var maxScoreLength=7+7;
	ctx.strokeText("Score: "+currentScore, canvas.width-(scoreTextSize/2*maxScoreLength),  scoreTextSize+10);
}

// Converts from degrees to radians.
function toRadians(degrees) 
{
  return degrees * Math.PI / 180;
}

// Converts from radians to degrees.
function toDegrees(radians) 
{
  return radians * 180 / Math.PI;
}


