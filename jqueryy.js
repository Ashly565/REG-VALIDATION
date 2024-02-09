$(document).ready(function(){
    $("#validation").validate({
        rules:{
            username:{
                required:true,
                minlength:5,
                maxlength:8
            },
            password:{
                required:true,
                minlength:8
            },
            cpassword:{
                required:true,
                minlength:8,
                equalTo:"#password"
            },
            gender:{
                required:true
            },
            Dob:{
                required:true
            },
            
            phone:{
                required:true,
                minlength:10,
                maxlength:10
            },
            email:{
                required:true,
                email:true
            }

        }

    })
})