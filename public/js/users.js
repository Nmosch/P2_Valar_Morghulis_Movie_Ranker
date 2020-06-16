$(document).ready(function () {

    const newUserEmail = $("#userEmail").val();
    const newUserPassword = $("#userPassword").val().trim();

    $("#submitBtn").on("click", newUser)
    console.log(newUserEmail);
    console.log(newUserPassword);
    function newUser() {
        $.ajax({
            url: "/api/users",
            method: "POST",
            data: {
                email: newUserEmail,
                password: newUserPassword,
            }
        }).then(() => {
                location.reload()
        })
    }
});