$( document ).ready(function() {
    $("#firstMovieGenre a").click(function(){
        $("#selectedGenreOne").text($(this).text())
    })

    $("#firstMovieRating a").click(function(){
        $("#selectedRatingOne").text($(this).text())
    })

    function newMovie(){
        const genreName = $("#selectedGenreOne").text()
        
        let newMovie = {
            title: $("#addMovies").val().trim().toUpperCase(),
            genreId: parseInt($("#"+genreName).attr("data-id"))
        }
        console.log(`This is new`,newMovie)
        $.ajax("/api/movies",{
            method:"POST",
            data: newMovie
        }) .then(()=>{
            console.log("Rated New Movie")
            // location.reload()
        })
    }
    function getMovie(){
        let getMovie = $("#addMovies").val().trim()
        let query =  "https://www.omdbapi.com/?t=" + getMovie + "&apikey=trilogy"
        $.ajax({
            url:query,
            method:"GET"
        })
        .then(res=>{
            console.log(res)
        });

    }
    $("#saveOptions").click(function(){
        // console.log("Working")
        event.preventDefault()
        newMovie();
        getMovie();
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