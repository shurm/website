<?php
$title = "Contact Me";
include 'assets/templates/header.php';
?>
<div class="container-contact100">
		
	<div class="wrap-contact100">
		<span class="contact100-form-symbol">
			<img src="assets/images/icons/symbol-01.png" alt="SYMBOL-MAIL">
		</span>

		<form class="contact100-form validate-form">
			<span class="contact100-form-title">
				Drop Me A Message
			</span>
			
			<div class = "flex-sb flex-w">
			
				<div class="wrap-input100 rs1 validate-input" data-validate = "Name is required">
					<input id ="name" class="input100" type="text" name="name" placeholder="*Name">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 rs1 validate-input" data-validate = "Email is required: e@a.z">
					<input id ="email" class="input100" type="text" name="email" placeholder="*Email Address">
					<span class="focus-input100"></span>
				</div>
				
				<div class="wrap-input100 rs1 " >
					<input id ="subject" class="input100" type="text" name="subject" placeholder="Subject">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 rs1 ">
					<input id ="phone" class="input100" type="text" name="phone_number" placeholder="Phone Number">
					<span class="focus-input100"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Message is required">
					<textarea id ="message" class="input100" name="message" placeholder="*Message"></textarea>
					<span class="focus-input100"></span>
				</div>

			</div>	
			
			<div id="wrapper">
				<button class="contact100-form-btn" >Send <span class="glyphicon glyphicon-send"></span></button>
			</div>
			
		</form>
	</div>
</div>
	
 <?php
	include 'assets/templates/footer.php';
?> 