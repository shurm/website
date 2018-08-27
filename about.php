<?php
$title = "About Me";
$active = "About";
include 'assets/templates/header.php';
?>
<style>
table {
    border-collapse: collapse;
    border: 1px solid black;
}
</style>
<main id="main">

	<div class="container">

		 <div class="row row-offcanvas row-offcanvas-left">
        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
            <div class="sidebar-nav" style = "position:fixed; font-size: 20px;  background-color: #E6E6E6;">
                <ul class="nav">
                    <li class="active"><a href="#Summary">Self Summary</a></li>
					<li><a href="#Education">Education</a></li>
					<li><a href="#Work">Work Experience</a></li>
					<li><a href="#Volunteering">Volunteer Experience</a></li>
                </ul>
            </div>
            <!--/.well -->
        </div>
		
        <!--/span-->

        <div class="col-xs-12 col-sm-9">
            <br>
     
	 
			<h2 class="section-title"><span><a name="Summary"> </a>Self Summary</span></h2>
				<ul>
					<p>Current university graduate student pursuing an advanced Computer Science degree. 
					Experience in multiple programming languages as well as many different software tools.
					Interested in systems, machine learning and computer graphics.
					Passionate about working with people to combine different perspectives to create new, awesome solutions.</p>
				</ul>
			<h2 class="section-title"><span><a name="Education"></a>Education</span></h2>
				
			<ul>
				<table class="table condensed-borderless-table">
					<tbody>
					  <tr >
						<td><img class="img-square" src="assets/images/upenn_logo.jpg" alt="University of Pennsylvania"></td>
						<td  >August 2018 - Present </td>
						
					  </tr>
					  <tr>
						<td><b>Masters in Computer and Information Science</b></td>
						<td>Philadelphia, PA</td>
					  </tr>
					</tbody>
				</table>				
				
				
				
				<table class="table condensed-borderless-table">
						<tbody>
						   <tr >
							<td><img class="img-square" src="assets/images/rutgers_logo.png" alt="Rutgers University"></td>
							<td  >September 2014 - May 2017 </td>
							
						  </tr>
						  <tr>
							<td><b>B.S. in Computer Science</b></td>
							<td>New Brunswick, NJ</td>
						  </tr>
							<tr>
							 
								<td></td>
								<td></td>
							</tr>
							<tr>
								
								<td>
									<ul>
										<li>Graduated Cum Laude</li>
										<li>Dean’s List: Fall 2016 and Spring 2017</li>
									</ul>
								</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</ul>	
			
			<h2 class="section-title"><span><a name="Work"></a>Work Experience</span></h2>
			
				<ul>
					<h3>Industry Experience:</h3>
					<table class="table condensed-borderless-table">
						<tbody>
						  <tr>
							<td><a href="https://www.tcs.com/">Tata Consultancy Services</a></td>
							<td>June 2017 - June 2018 </td>
							
						  </tr>
						  <tr>
							<td><b>Software Engineer</b></td>
							<td>Edison, NJ </td>
						  </tr>
							<tr>
							 
								<td><br><i>Duties and Responsibilities:</i></td>
								<td></td>
							</tr>
							<tr>
								
								<td>
									<ul>
										<li>Design, develop, build and test large-scale java framework-based applications</li>
										<li>Work alongside other enginners to discover and implement the best practices for a given project</li>
									</ul>
								</td>
								<td></td>
							</tr>
						</tbody>
					</table>	
					
					<h3>Research Experience:</h3>
					<table class="table condensed-borderless-table">
						<tbody>
						  <tr >
							<td><a href="https://www.rutgers.edu/">Rutgers University</a></td>
							<td>Feb 2017 - May 2017 </td>
							
						  </tr>
						  <tr>
							<td><b>Research Assistant</b></td>
							<td>New Brunswick, NJ </td>
						  </tr>
						
						 <tr>
						 
							<td><br><i>Duties and Responsibilities:</i></td>
							<td></td>
						</tr>
						<tr>
							<td>
								<ul>
									<li>Collaborate with fellow research assistants to meet development and testing goals on schedule.</li>
									<li>Meet regularly with team lead and other research assistants to discuss progress, future tasks, and ideas for implementation.</li>
								</ul>
							</td>
							<td></td>
						</tr>
						</tbody>
					</table>	
					
					<h3>Teaching Experience:</h3>
					<table class="table condensed-borderless-table">
						<tbody>
						  <tr >
							<td><a href="https://rlc.rutgers.edu/">Rutgers University Learning Centers</a></td>
							<td>Feb 2015 - May 2017 </td>
							
						  </tr>
						  <tr>
							<td><b>Tutor</b></td>
							<td>New Brunswick, NJ </td>
						  </tr>
						
						 <tr>
						 
							<td><br><i>Duties and Responsibilities:</i></td>
							<td></td>
						</tr>
						<tr>
							
							<td>
								<ul>
									<li>Taught both undergraduate and graduate students in the subjects Computer Science, Mathematics and Physics. </li>
									<li>Lead group sessions in teaching course material and encouraged students to work collaboratively on difficult subject matter. </li>
								</ul>
							</td>
							<td></td>
						</tr>
						</tbody>
					</table>	
					
					<p>I have additional teaching experience listed in the volunteer section below</p>
				</ul>
				<h2 class="section-title" ><span><a name="Volunteering"></a>Volunteering Efforts</span></h2>
			
				<ol>
					<li> Assisted with technical questions and other technical issues at <a href="https://www.hackru.org/">HackRU</a> 2017</li>
					<li> Sorted donations, helped customers carry groceries, and washed dishes at <a href="http://www.lunchbreak.org">Lunch break</a> </li>
					<li> Helped build low income housing through <a href="https://www.habitat.org">Habitat for Humanity</a> </li>
					<li> Tutored Math and Computer Science for students with Autism through the <a href="http://rhscaps.rutgers.edu/services/autism-spectrum-college-support-program/">Rutgers College Support Program</a> </li>
					<li> Taught English in Costa Rica through the organization <a href="https://maximonivel.com/">Maximo Nivel</a></li>
				</ol>
				<div id="myCarousel" class="carousel slide"  data-ride="carousel" >
					<!-- Indicators -->
					<ol class="carousel-indicators">
					  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					  <li data-target="#myCarousel" data-slide-to="1"></li>
					  <li data-target="#myCarousel" data-slide-to="2"></li>
					</ol>

					<!-- Wrapper for slides -->
					<div class="carousel-inner" >
					  <div class="item active">
						<img src="assets/images/lunch_break_pic.png" style="height:300px;" class="img-responsive center-block" >
						<div class="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black">
							Stocking the Food Pantry
						</div>
					  </div>

					  <div class="item">
						<img src="assets/images/habitat_thank_you.jpg" style="height:300px;" class="img-responsive center-block">
						
					  </div>
					
					  <div class="item">
						<img src="assets/images/NJ_marathon.jpg"  style="height:300px;" class="img-responsive center-block">
						<div class="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black">
							Volunteering at NJ Marathon
						</div>
					  </div>
					</div>

					<!-- Left and right controls -->
					<a class="left carousel-control" href="#myCarousel" data-slide="prev">
					  <span class="glyphicon glyphicon-chevron-left"></span>
					  <span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#myCarousel" data-slide="next">
					  <span class="glyphicon glyphicon-chevron-right"></span>
					  <span class="sr-only">Next</span>
					</a>
				  
				</div>
			
            <!--/row-->
			</div>
        <!--/span-->


		</div>	
		
	</div>	<!-- /container -->
	
</main>
  
 <?php

include 'assets/templates/footer.php';
?>   