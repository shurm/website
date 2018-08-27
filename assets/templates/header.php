<?php
if(count(get_included_files()) ==1) exit("Direct access not permitted.");
?>	
<!DOCTYPE html>
<html lang="en">
	<head>


		<meta charset="utf-8">
		<meta name="viewport"    content="width=device-width, initial-scale=1.0">
		<meta name="description" content="">
		<meta name="author"      content="Sergey Pozhilov (GetTemplate.com)">
		
		<?php
			echo "<title>$title</title>";

		?>
		<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
		<link rel="shortcut icon" href="assets/images/gt_favicon.png">
		
		<!-- Bootstrap -->
		<link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.no-icons.min.css" rel="stylesheet">
		<!-- Icon font -->
		<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
		
		
		<!-- Fonts -->
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Alice|Open+Sans:400,300,700">
		
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	  
		<!-- Custom styles -->
		<link rel="stylesheet" href="assets/css/styles.css">
		<link rel="stylesheet" type="text/css" href="assets/css/util.css">
		<link rel="stylesheet" type="text/css" href="assets/css/main.css">
	
		

		<!--[if lt IE 9]> <script src="assets/js/html5shiv.js"></script> <![endif]-->
	</head>
	<body class="home">

		<header id="header">
			<div id="head" style = "background: #f4f4f4 url(assets/images/bg_head6.jpg) top center;
		  background-size: 100% 1000px;" class="parallax" parallax-speed="2">
				<h1 id="logo" class="text-center">
					<img class="img-circle" src="assets/images/welcome.jpg" alt="">
					<span class="title">Michael Shur</span>
					<span class="tagline">Computer Programmer and Tutor<br>
						<a href="">michaelshur28@gmail.com</a></span>
				</h1>
				
			</div>
			

			<nav class="navbar navbar-default">
				<div class="container-fluid">
					
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span>
							<span class="icon-bar"></span> <span class="icon-bar"></span> 
						</button>
					</div>
					
					<div class="navbar-collapse collapse" id="myNavbar">
						
						<ul class="nav navbar-nav">
							<li class="active"><a href="index.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects <b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li><a href="projects.html#Games">Games</a></li>
									<li><a href="projects.html#Games">Source Code</a></li>
								</ul>
							</li>
							<li><a href="blog.html">Blog</a></li>
						</ul>
					
					</div><!--/.nav-collapse -->			
				</div>	
			</nav>
		</header>


		<div class="container"> 
