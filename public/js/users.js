  $(document).ready(function () {

    const newUserEmail = $("#userEmail").val();
    const newUserPassword = $("#userPassword").val();

    $("#submitBtn").on("click", newUser)
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