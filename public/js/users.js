$(document).ready(function(){

    function newUser(){
        const newUserName = $("#userName").val().trim()
        const newUserEmail = $("#userEmail").val().trim()
        const newUserPassword = $("#userPassword").val().trim()
            
            $.ajax({
                url: "/api/users",
                method: POST,
                data: {
                    name: newUserName,
                    email: newUserEmail,
                    password: newUserPassword,
                }
            })
            .then(()=>{
                location.reload()
            })

    }
});

    
