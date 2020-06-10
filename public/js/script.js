$( document ).ready(function() {
    $("#firstMovieGenre a").click(function(){
        $("#selectedGenreOne").text($(this).text())
    })

    $("#firstMovieRating a").click(function(){
        $("#selectedRatingOne").text($(this).text())
    })

    function newMovie(){
        const newMovie = $("#addMovies").val().trim().toUpperCase()
        const genreId = $(this).data("id")
        
        $.ajax({
            url: "/api/movies",
            method: POST,
            data: {
                title: newMovie,
                genreId: genreId
            }
        })
        .then(()=>{
            location.reload()
        })
    }
    
    $("#saveOptions").click(function(){
        // console.log("Working")
        event.preventDefault()
        newMovie()
    })
});