<?php
$title = "About Me";
$active = "About";
include 'assets/templates/header.php';
?>

<style>
	#dialogoverlay{
		display: none;
		opacity: .8;
		position: fixed;
		top: 0px;
		left: 0px;
		background: #FFF;
		width: 100%;
		z-index: 9999;
	}
	#dialogbox{
		display: none;
		position: fixed;
		background: #000;
		border-radius:7px; 
		width:550px;
		z-index: 9999;
	}
	#dialogbox > div{ background:#FFF; margin:8px; }
	#dialogbox > div > #dialogboxhead{font-size:19px; padding:10px; color:#FFFFFF; }
	#dialogbox > div > #dialogboxbody{padding:20px; color:#000000; text-align:center; }
	.button2
	{
		opacity: 1.0;
			filter: alpha(opacity=100);
	}
	.button2:hover 
	{
			opacity: 0.7;
			filter: alpha(opacity=70);
	}
	.button2:active 
	{
			 background-image: url("http://dummyimage.com/100x100/eb00eb/fff");
	}
	.wrapper 
	{
	  display: flex;
	  justify-content: center;
	}


</style>
<div class="wrapper">

	<h3><b><u>MineSweeper</u></b></h3>
	
</div>

<h4><b><i>Instructions:</i></b></h4>
		  
<p> The player is initially presented with a grid of undifferentiated squares. 
Some randomly selected squares, unknown to the player, are designated to contain mines. 

 The game is played by revealing/clicking squares inside of the grid. 
 If a square containing a mine is revealed, the player loses the game. 
 If no mine is revealed, a digit is instead displayed in the square, indicating how many adjacent squares contain mines; 
 if no mines are adjacent, the square becomes blank. 
 The player uses this information to deduce the contents of other squares, and may either safely reveal each square or mark the square as containing a mine.
 
 The game is won when the player successfully "flags" all the bombs
</p>


<div id="dialogoverlay"></div>
<div id="dialogbox">
	<div>
		<div id="dialogboxhead"></div>
		<div id="dialogboxbody">
			<button id ="okButton" onclick="closeDialog()" style="margin-left:30px">OK</button>
		</div>
	</div>
</div>
		
		
	
		
<div class="container-contact100">
	<div class="wrap-contact100">
		<div class="contact100-form">	
			
			<div class="wrapper">
				<button onclick="mineSweeperGame()" class="btn btn-primary btn-lg" >Reset Game</button>
			</div>
			
			<div class="wrapper">
				<div id="grid" >

				</div>
			</div>
			<div class="wrapper">
				<div id= "radiobuttons">
				</div>
			</div>
			<div class="wrapper">
				<div id= "mines left" style="display:inline;">
					<h3 id= "mines heading" style="display:inline;"></h3>
				
					<h4 id="mines info" style="display:inline;"></h4>
				</div>
			</div>
		</div>
	</div>
</div>
	
		
<script src="assets/js/MineSweeper.js?2"></script>	
	
 <?php
	include 'assets/templates/footer.php';
?> 