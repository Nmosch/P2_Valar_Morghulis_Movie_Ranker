$(document).ready(function () {
    
    $("#firstMovieGenre a").click(function () {
        $("#selectedGenreOne").text($(this).text())
    });

    $("#firstMovieRating a").click(function () {
        $("#selectedRatingOne").text($(this).text())
    })
    function getMovie() {
        let getMovie = $("#addMovies").val().trim()
        let query = "https://www.omdbapi.com/?t=" + getMovie + "&apikey=trilogy"
        return $.ajax({
            url: query,
            method: "GET"
        })
            .then(res => {
                console.log(res);
                newMovie(res)
            });
    };
    function newMovie(res) {
        const genreName = $("#selectedGenreOne").text()
        let newMovie = {
            title: $("#addMovies").val().trim().toUpperCase(),
            genreId: parseInt($("#" + genreName).attr("data-id")),
            rating: $("#selectedRatingOne").text(),
            userId: parseInt($("#userNameHere").attr("data-id")),
            moviePoster: res.Poster
        }
        console.log(newMovie);
        $.ajax("/api/movies", {
            method: "POST",
            data: newMovie
        }).then((res) => {
            console.log("Added New Movie", res)
            postRating(res)
            // location.reload()
        })
    }
    function postRating(res) {
        let newRating = {
            rating: $("#selectedRatingOne").text(),
            movieId: res.id,
            userId: parseInt($("#userNameHere").attr("data-id"))
        };
        $.ajax("/api/rating", {
            method: "POST",
            data: newRating
        }).then((data) => {
            console.log("Rated New Movie", data.id);
            // location.reload()
        })
    };

    

    $("#saveOptions").click(function () {
        event.preventDefault()
        getMovie();
    })
    function grabMovieByGenre(genreId) {

        $.ajax("/api/movies/genre/" + genreId, {
            method: "GET"
        }).then((res) => {
            console.log(res);
            $("#firstRow").empty();
            let row = res.rows
            const top6 = row.slice(0,6);
            top6.forEach(movie => {
                var newBlock = $("<div class='col-md-4'>")
                var newCard = $("<div class='card text-white bg-dark mb-3' style='max-width: 18rem;'></div")
                var newCardImage = $("<img src='' class='card-img-top cardImg' alt=''>")
                var newCardBody = $("<div class='card-body'></div")
                var newHeader = $("<h5 class='card-title'></h5")
                var newRatingP = $("<p class='card-text'></p>")
                $(newHeader).append(movie.title)
                $(newRatingP).append(movie.rating)
                $(newCardImage).attr("src", movie.moviePoster)
                $(newCardImage).attr("alt", movie.title)
                $(newCardBody).append(newHeader, newRatingP)
                $(newCard).append(newCardImage, newCardBody)
                $(newBlock).append(newCard)
                $("#firstRow").append(newBlock)
            })
        })
    }
    $(".genreButton").click(function () {
        event.preventDefault();
        const genreId = $(this).attr("value");
        grabMovieByGenre(genreId)
    });
});