function prepareMail() {
	
	alert("hi");
	var warning="";
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	
	var message = document.getElementById("message").value;
	
	
	if(!name)
		warning+=" Error, Name is required. ";
	
	if(!email)
		warning+=" Error, Email is required. ";
	
	if(!message)
		warning+=" Error, please provide a message. ";
	
	if(warning.length>0)
	{
		alert(warning);
	}
	else
	{
		var phone = document.getElementById("phone").value;
		if(phone)
		{
			phone="%0D%0APhone: "+phone+"%0D%0A";
		}
		location.href = "mailto:michaelshur28@gmail.com?subject=New_Message_from_mshur/contact_form&body="+message+"%0D%0A%0D%0ARegards,%0D%0A"+name+phone;
	}
    
}
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

		if(check)
			prepareMail();
        return false;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
