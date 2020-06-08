$( document ).ready(function() {
    $("#firstMovieGenre a").click(function(){
        $("#selectedGenreOne").text($(this).text())
    })

    $("#firstMovieRating a").click(function(){
        $("#selectedRatingOne").text($(this).text())
    })

    $("#secondMovieGenre a").click(function(){
        $("#selectedGenreTwo").text($(this).text())
    })

    $("#secondMovieRating a").click(function(){
        $("#selectedRatingTwo").text($(this).text())
    })

    $("#thirdMovieGenre a").click(function(){
        $("#selectedGenreThree").text($(this).text())
    })

    $("#thirdMovieRating a").click(function(){
        $("#selectedRatingThree").text($(this).text())
    })

    $("#fourthMovieGenre a").click(function(){
        $("#selectedGenreFour").text($(this).text())
    })

    $("#fourthMovieRating a").click(function(){
        $("#selectedRatingFour").text($(this).text())
    })

    $("#fifthMovieGenre a").click(function(){
        $("#selectedGenreFive").text($(this).text())
    })

    $("#fifthMovieRating a").click(function(){
        $("#selectedRatingFive").text($(this).text())
    })

    $("#saveOptions").click(function(){
        console.log("Working")
        
    })
});