var rows=10;
var columns=10;
var buttonSize=40;
var howManyMines=20;

var filePath="assets/images/minesweeper/";
	function addRadioButtons()
	{
		var div=document.getElementById("radiobuttons");
		var h3=document.createElement("h3");
		h3.innerHTML="Flag as a Mine";
		
		div.appendChild(h3);
		
		var radioInput = document.createElement('input');
			radioInput.setAttribute('type', 'radio');
			radioInput.setAttribute('name', "switch");
			
			
			radioInput.setAttribute('onclick', "flagMode=false;");
			
			radioInput.setAttribute('checked', "checked");
		
		div.appendChild(document.createTextNode(" Off  "));
		
		
		div.appendChild(radioInput);
		
			radioInput = document.createElement('input');
			radioInput.setAttribute('type', 'radio');
			radioInput.setAttribute('name', "switch");
			
			
			radioInput.setAttribute('onclick', "flagMode=true;");
			
			div.appendChild(document.createTextNode("      On   "));
		div.appendChild(radioInput);
	}
	function addMinesInfo()
	{
		
		var h3=document.getElementById("mines heading");
		
		h3.innerHTML="Number of Mines Left:";
		
		var h4=document.getElementById("mines info");
		
		h4.innerHTML=""+numberOfMinesLeft;
		
		
	}
	function createButton(r,c) 
	{
		var btn = document.createElement("IMG");
		
		btn.style.height=buttonSize+"px";
		btn.style.width=buttonSize+"px";
		btn.src=filePath+"active_button.png";
		btn.style.float="right";
		btn.style.border="1px solid grey";
		
		btn.setAttribute("class", "button2");
		
		btn.onclick=function () 
		{
			if(gameOver==false)
			{
				if(flagMode==false)
				{
					clickFunction(btn,r,c);
				}
				else
				{
					flagFunction(btn,r,c);
				}
			}
		};

		document.getElementById("grid").appendChild(btn);
		
		return btn;
	}

	function clickFunction(btn,r,c)
	{
		if(pushed[r][c]==false && flagged[r][c]==false)
		{
			if(aMineWasClicked(r,c))
			{
				revealMines(r,c);
				setTimeout(function(){{showDialog('fail');}}, 100);
			}
			else
			{
				pushed[r][c]=true;
				btn.removeAttribute("class"); 
				buttonOperation(r,c);
			}
		}
		
	}
	function flagFunction(btn,r,c)
	{
		if(pushed[r][c]==false)
		{
			if(flagged[r][c]==false)
			{
				
				flagged[r][c]=true;
				buttons[r][c].src=filePath+"flagged_button.png";
				btn.removeAttribute("class"); 
				if(aMineWasClicked(r,c))
				{
					
					numberOfMinesLeft--;
					
					var h4=document.getElementById("mines info");
		
					h4.innerHTML=""+numberOfMinesLeft;
					
					if(numberOfMinesLeft==0)
					{
						var FlagDiv=document.getElementById("radiobuttons");
						while(FlagDiv.hasChildNodes())
						{
							FlagDiv.removeChild(FlagDiv.firstChild);
						}
						
						var h3=document.getElementById("mines heading");
							
						h3.innerHTML="";
						
						var p=document.getElementById("mines info");
						
						p.innerHTML="";
						
						
						var h2=document.createElement("h2");
						h2.innerHTML="YOU WON!";
						h2.style.fontWeight = "1200";
						h2.style.color = "Red";
						
						FlagDiv.appendChild(h2);
						
						gameOver=true;
						
						showDialog('success');
					}	
				}
					
				
			}
			else
			{
				flagged[r][c]=false;
				
				buttons[r][c].src=filePath+"active_button.png";
				btn.setAttribute("class", "button2");
				if(aMineWasClicked(r,c))
				{
					
					numberOfMinesLeft++;
					var h4=document.getElementById("mines info");
		
					h4.innerHTML=""+numberOfMinesLeft;
				}
				
					
				
			}
		}
	}
    function revealMines(r,c)
    {
		var a;
        for( a=0;a<mineCoordinates.length;a++)
        {
           buttons[mineCoordinates[a][0]][mineCoordinates[a][1]].src=filePath+"mine_button.png";
        }
		buttons[r][c].src=filePath+"pushed_mine_button.png";
		
		
		for(r=0;r<rows;r++)
		{
			for(c=0;c<columns;c++)
			{
				buttons[r][c].removeAttribute("class"); 
			}
			
		}
		gameOver=true;
    }

    function buttonOperation(r, c)
    {
		var startR,endR,startC,endC;

        //Range Check
        if(r-1<0)
            startR=r;
        else
            startR=r-1;
        if(r+1>=buttons.length)
            endR=r;
        else
            endR=r+1;
		
        if(c-1<0)
            startC=c;
        else
            startC=c-1;
        if(c+1>=buttons.length)
            endC=c;
        else
            endC=c+1;


        var mineCount=0;

        var currentR;
        for(currentR=startR;currentR<=endR;currentR++)
        {
			var currentC;
            for(currentC=startC;currentC<=endC;currentC++)
            {
                if(currentR!=r || currentC!=c)
                {
                    if(aMineWasClicked(currentR,currentC))
                        mineCount++;
                }
            }
        }
		
		
		buttons[r][c].src=filePath+"button_"+mineCount+".png";
		
		
        if(mineCount==0)
        {

			for(currentR=startR;currentR<=endR;currentR++)
			{
				var currentC;
				for(currentC=startC;currentC<=endC;currentC++)
				{
					if(currentR!=r || currentC!=c)
					{
						clickFunction(buttons[currentR][currentC],currentR,currentC);
					}
				}
			}
        }
    }

    function aMineWasClicked(r,c)
    {
		var a;
        for(a=0;a<mineCoordinates.length;a++)
        {
            if(r==mineCoordinates[a][0] && c==mineCoordinates[a][1])
                return true;
        }
        return false;
    }
	
	function createMines()
	{
		
		var pair=[0,0];
		
		var a;
		
		var r1;
		
		var c1;
        for ( a = 0; a < howManyMines; a++) 
		{
			
            r1 = Math.floor(Math.random() * rows);
            c1 = Math.floor(Math.random() * columns);
			
			while(aMineWasClicked(r1,c1))
			{
				r1 = Math.floor(Math.random() * rows);
				c1 = Math.floor(Math.random() * columns);
			}
			
			pair[0]=r1;
			pair[1]=c1;
				
			mineCoordinates.push(pair);
			pair=[0,0];
        }
		
	}
	
	function clearGameBoard()
	{
		var gameBoard=document.getElementById("grid");
		while(gameBoard.hasChildNodes())
		{
			gameBoard.removeChild(gameBoard.firstChild);
		}
		
		var FlagDiv=document.getElementById("radiobuttons");
		while(FlagDiv.hasChildNodes())
		{
			FlagDiv.removeChild(FlagDiv.firstChild);
		}
		
		var h3=document.getElementById("mines heading");
			
		h3.innerHTML="";
		
		var p=document.getElementById("mines info");
		
		p.innerHTML="";
	}
	
	

function mineSweeperGame()
{
	
	document.getElementById("grid").style.width=width+"px";
	//document.getElementById("startGame").innerHTML="Restart";
	
	clearGameBoard();
	
	pushed=[];
	holder=[];
	holder2=[];
	flagged=[];
	buttons=[];
	singleRow=[];
	flagMode=false;
	gameOver=false;
	mineCoordinates=[];
	numberOfMinesLeft=howManyMines;
	
	
	createMines();
	addRadioButtons();
	
	addMinesInfo();
	for(r=0;r<rows;r++)
	{
		for(c=0;c<columns;c++)
		{
			singleRow.push(createButton(r,c));
			holder.push(false);
			holder2.push(false);
		}
		buttons.push(singleRow);
		pushed.push(holder);
		flagged.push(holder2);
		singleRow=[];
		holder=[];
		holder2=[];
	}
}
function showDialog(type)
{
	var winW = window.innerWidth;
	var winH = window.innerHeight;
	var dialogoverlay = document.getElementById('dialogoverlay');
	var dialogbox = document.getElementById('dialogbox');
	var dialogboxhead = document.getElementById('dialogboxhead');
	var dialogboxbody = document.getElementById('dialogboxbody');
	
	dialogoverlay.style.height = winH+"px";
	dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	dialogbox.style.top = "100px";
	
	dialogboxbody.innerHTML ='<button onclick="closeDialog()" style="margin-left:30px">OK</button>';
	
	if(type=="fail")
	{
		dialogboxhead.innerHTML = '<b>'+'Game Over'+'</b>';
		dialogboxhead.style.background="#FF1818";
		dialogboxbody.style.background="#FF4545";
		$("#dialogbox").slideDown("slow");
	}
	else if(type=="success")
	{
		dialogboxhead.innerHTML = '<b>'+'You Win'+'</b>';
		dialogboxhead.style.background="#4ECF4E";
		dialogboxbody.style.background="#75F775";
		$("#dialogbox").slideDown("slow");
	}
	
}
function closeDialog()
{
	document.getElementById('dialogbox').style.display = "none";
	document.getElementById('dialogoverlay').style.display = "none";
}

var width=columns*buttonSize;
var flagMode=false;
var gameOver=false;
document.getElementById("grid").style.width=width+"px";
var pushed=[];
var holder=[];
var holder2=[];
var flagged=[];
var buttons=[];
var singleRow=[];
var r;
var c;

var mineCoordinates=[];
var numberOfMinesLeft=howManyMines;
mineSweeperGame();
