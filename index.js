$(function () {
    $("#butnsubmit").click(function(){
        var username = $("#uname").val().trim();
        var password = $("#pwd").val().trim();

        if(( username != "" && password != "") &&  username === password ){
            $.ajax({
                url:'https://5f676cf338ce8700163985fd.mockapi.io/Login',
                type:'post',
                data:{username:username,password:password},
                success:function(response){
                   
                    if(response ){
                       alert("Login sucessfull");
                       localStorage.setItem('login',true)
                       location.href="Orderpage.html"

                    }

                   
                }
            });
            
        }
        else{
           alert("Invalid username and password")     
        }
        
    });
})