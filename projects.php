<?php
$title = "About Me";
$active = "About";
include 'assets/templates/header.php';
?>
<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial;
}

.header {
    text-align: center;
    padding: 32px;
}

.row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
    -ms-flex: 16.6%; /* IE10 */
    flex: 16.6%;
    max-width: 16.6%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
}

/* Responsive layout - makes a 3 column-layout instead of 6 columns */
@media screen and (max-width: 900px) {
    .column {
        -ms-flex: 33.3%;
        flex: 33.3%;
        max-width: 33.3%;
    }
}


.reveal{
	overflow: hidden;
	height: 100px;
}

.reveal:hover {
	overflow: auto;
	height: auto;
}

.colorAnimationClass {
   
    -webkit-animation: colorAnimation 3s forwards; /* Safari 4.0 - 8.0 */
   
    animation: colorAnimation 3s forwards;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes colorAnimation {
    from { -webkit-filter: grayscale(100%);}
    to { -webkit-filter: grayscale(0%);}
    
}

@keyframes colorAnimation {
    from { filter: grayscale(100%);}
    to { filter: grayscale(0%);}
}

</style>

<div class="row section featured topspace">
			<h2 class="section-title"><span>Language and Tools I have experience in:</span></h2>
			

		<div class="row"> 
  <div class="column">
    <img src="http://blog.klocwork.com/wp-content/uploads/fly-images/14459/python-logo-348x350-c.jpg" alt="Python" style="width:100%">
    <img src="https://www.vectorlogo.zone/logos/android/android-card.png" alt="Android Application development" style="width:100%">
   <img src="http://www.timesofarticle.com/wp-content/uploads/2017/10/jsp.png" alt="Java Server Pages" style="width:100%">
    
  </div>
  <div class="column">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png" alt="PHP" style="width:100%">
    <img src="https://www.eclipse.org/artwork/images/v2/logo-800x188.png" alt="Eclipse" style="width:100%">
    <img src="http://www.davidtan.org/wp-content/uploads/2010/12/mysql-logo.jpg" alt="MySQL" style="width:100%">
    
  </div>  
  <div class="column">
    <img src="https://i2.wp.com/opensource.io/wp-content/uploads/2017/09/GemfireTraining-250x250.png?fit=250%2C250&ssl=1" alt="Gemfire (In Memory Data Grid)" style="width:100%">
    <img src="https://www.logolynx.com/images/logolynx/d9/d94bcff71328e56a7a3949963865c62c.png" alt="Java Swing" style="width:100%">
    
    
  </div>
  <div class="column">
    
    <img src="https://givingdata.com/wp-content/uploads/2013/07/html-css-js.png" alt="Web Development (HTML, CSS, And JavaScript)" style="width:100%">
    <img src="https://www.eclipse.org/xtend/images/javafx_logo.jpg" alt="JavaFX" style="width:100%">
	
  </div>
  <div class="column">
	<img src="http://entefire.it/fire/wp-content/uploads/corso-c-sharp.jpg" alt="C#" style="width:100%">
    
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Visual_Studio_2012_logo_and_wordmark.svg/2000px-Visual_Studio_2012_logo_and_wordmark.svg.png" alt="Microsoft Visual Studio" style="width:100%">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2000px-Unity_Technologies_logo.svg.png" alt="Unity" style="width:100%">
    
  </div>
  <div class="column">
	<img src="https://png.icons8.com/color/1600/c-plus-plus-logo.png" alt="C++" style="width:100%">
	<img src="https://cdn-images-1.medium.com/max/2000/1*gycg7f5bYLuR4ut_JAEs7A.png" alt="Spring Framework" style="width:100%">
	<img src="https://www.todaysoftmag.com/images/articles/tsm39/Picture1.png" alt="Cucumber testing framework" style="width:100%">
    
    
  </div>
</div>
</div> <!-- / section -->
		<div class="row section featured topspace">
			<h2 class="section-title"><span><a name="Games"> </a>Games</span></h2>
			<div class="thumbnails recentworks row">
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
					<a class="thumbnail" href="sidebar-right.html">
						<span class="img">
							<img src="assets/images/girl_vs_zombies.png" alt="">
							<span class="cover"><span class="more">Play &rarr;</span></span>
						</span>
						<span class="title">Unitychan vs zombies - Original Game</span>
					</a>
					<span class="details"><a >Unity</a> | <a >C#</a></span>
					<h4></h4>
					<p></p>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
					<a class="thumbnail" href="sidebar-right.html">
						<span class="img">
							<img src="assets/images/minesweeper.jpg" alt="">
							<span class="cover"><span class="more">Play &rarr;</span></span>
						</span>
						<span class="title">Minesweeper - The Classic Game</span>
					</a>
					<span class="details"><a >HTML</a> | <a >JavaScript</a></span>
					<h4></h4>
					<p></p>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
					<a class="thumbnail" href="sidebar-right.html">
						<span class="img">
							<img src="assets/images/destroy_the_asteroids.png" alt="">
							<span class="cover"><span class="more">Play &rarr;</span></span>
						</span>
						<span class="title">Destroy the Asteroids - Original Game</span>
					</a>
					<span class="details"><a >HTML5 Canvas</a> | <a >JavaScript</a></span>
					<h4></h4>
					<p></p>
				</div>

				
			</div>
		</div> <!-- / section -->
	
		<div class="row section featured topspace">
			<h2 class="section-title"><span>Source Code</span></h2>
			<h5 class="text-center"><span><i>mouse over or tap images below to view demos</i></span></h5>
			<div class="row">
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
					<h3>Paint Application</h3>
					<a class="thumbnail2">
						<span class="img">
							<img onmouseover="bigImg(this,'assets/images/paint_demo.gif')" onmouseout="normalImg(this)" src="assets/images/paint_demo.jpg" alt="My version of the famous software: Microsoft Paint.">
							
						</span>
					</a>
					<span class="details"><a >Java </a> | <a >Java GUI Swing</a></span>
					<h4></h4>
					
					<table class="table table-striped text-center" style = " table-layout: fixed;">
				
						<tbody>
						  
						  <tr>
							<td><a href="" >View Source Code</a></td>
						  </tr>
						  <tr>
							<td><a href="assets/Paint.jar" >Run</a></td>
						  </tr>
						</tbody>
					</table>
					
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
					<h3>Simple Spring Web App</h3>
					<a class="thumbnail2">
						<span class="img">
							<img onmouseover="bigImg(this,'assets/images/spring_demo.gif')" onmouseout="normalImg(this)" src="assets/images/spring_demo.jpg" alt="Web Application which adds and displays data in an Apache Database. Using the Java Spring Framework, and Java Server Pages">
							
						</span>
					</a>
					
					<span class="details"><a>Java </a> | <a >Java Spring Framework</a> | <a >Java Server Page</a></span>
					<h4></h4>
					<table class="table table-striped text-center" style = " table-layout: fixed;">
				
						<tbody>
						  
						  <tr>
							<td><a href="" >View Source Code</a></td>
							
						  </tr>
						
						</tbody>
					</table>
					
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
					<h3>Android Chess App</h3>
					<a class="thumbnail2">
						<span class="img">
							<img onmouseover="bigImg(this,'assets/images/chess_demo.gif')" onmouseout="normalImg(this)" src="assets/images/chess_demo.jpg" alt="Chess Andriod Application with AI chess player, and 2 player pass n play">
							
						</span>
					</a>
					
					<span class="details"><a>Android </a> | <a>Java</a> | <a>XML</a></span>
					<h4></h4>
					<table class="table table-striped text-center" style = " table-layout: fixed;">
				
						<tbody>
						  
						  <tr>
							<td><a href="" >View Source Code</a></td>
						  </tr>
						  <tr>

							<td><a href="#" >View On App Store</a></td>
						  </tr>
						</tbody>
					</table>
					
				</div>
				
				
				
				
				
			</div>
			
		</div> <!-- / section -->
		<div class="row section featured topspace">
			
			<div class="row">
				
				
				<div class="col-sm-6 col-md-3">
					<h3 class="text-center">BitTorrent</h3>
					<p class="">Simple BitTorrent Java implementation, for sharing and requesting files which make up the classic video <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">Rick Astley - Never Gonna Give You Up<a></p>
					<p class="text-center"><a href="" class="mybtn mybtn-action">Source Code</a></p>
				</div>
				<div class="col-sm-6 col-md-3">
					<h3 class="text-center">Solving Sudoku with AI heuristics </h3>
					<p class="">Solves a specified <a href="https://en.wikipedia.org/wiki/Sudoku">Sudoku Puzzle</a>, using the heuristic search algorithm known as local beam search.</p>
					<p class="text-center"><a href="" class="mybtn mybtn-action">Source Code</a></p>
				</div>
				<div class="col-sm-6 col-md-3">
					<h3 class="text-center">Multithreaded Bank System</h3>
					<p class="text-center">A bank system implementation written in the programming language C which keeps track of and handles requests to correctly alter the accounts of customers. </p>
					<p class="text-center"><a href="" class="mybtn mybtn-action">Source Code</a></p>
				</div>
				<div class="col-sm-6 col-md-3">
					<h3 class="text-center">Application development</h3>
					<p class="text-center">Designing, creating and maintaining software programs 
					that are designed to accomplish a specific task, by using various IDE tools, apis, frameworks, etc.  </p>
					<p class="text-center"><a href="" class="mybtn mybtn-action">Read more</a></p>
				</div>
				
			</div>
		</div> <!-- / section -->

	
 <?php
	include 'assets/templates/footer.php';
?> 