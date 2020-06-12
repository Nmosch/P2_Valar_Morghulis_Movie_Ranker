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
        return $.ajax({
            url:query,
            method:"GET"
        })
        .then(res=>{
            console.log(res)
        });

    };
   function postRating(){
       let getRating = $("#firstMovieRating").val()
   }
    $("#saveOptions").click(function(){
        // console.log("Working")
        event.preventDefault()
        newMovie();
        getMovie();
    })

});