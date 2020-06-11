$( document ).ready(function() {
    $("#firstMovieGenre a").click(function(){
        $("#selectedGenreOne").text($(this).text())
    })

    $("#firstMovieRating a").click(function(){
        $("#selectedRatingOne").text($(this).text())
    })

    function newMovie(){
        let newMovie = {
            title: $("#addMovies").val().trim().toUpperCase(),
            genreId: $(this).data("id")
        }
        $.ajax("/api/movies",{
            method:"POST",
            data: newMovie
        }) .then(()=>{
            console.log("Rated New Movie")
            location.reload()
        })
    }
    
    $("#saveOptions").click(function(){
        // console.log("Working")
        event.preventDefault()
        newMovie()
    })

    // login button redirecting to movies mainpage
    $("#login").click(function(){
        console.log("working")
        window.location.href = "/movies"
    })
    $("#signUp").click(function(){
        console.log("working")
        window.location.href = "/movies"
    })

    

});