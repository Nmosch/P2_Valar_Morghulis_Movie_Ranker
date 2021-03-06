$(document).ready(function () {

    $("#firstMovieGenre a").click(function () {
        $("#selectedGenreOne").text($(this).text())
    });

    $("#firstMovieRating a").click(function () {
        $("#selectedRatingOne").text($(this).text())
    })
    function getMovie() {
        let getMovie = $("#addMovies").val().trim()
        let query = "https://www.omdbapi.com/?t=" + getMovie + "&apikey=64581578"
        return $.ajax({
            url: query,
            method: "GET"
        })
            .then(res => {
                if (res.Response === "False") {
                    alert("Please Check you spelling.....")
                } else {
                    newMovie(res)
                }

            });
    };
    function newMovie(res) {
        const genreName = $("#selectedGenreOne").text()
        let newMovie = {
            title: res.Title.toUpperCase(),
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
            postRating(res);
            location.reload();
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

        })
    };

    $("#saveOptions").click(function () {
        event.preventDefault()
        if ($("#addMovies").val() === "") {
            alert("Please enter a movie")
        } else {
            getMovie();
        }

    })
    function grabMovieByGenre(genreId) {

        $.ajax("/api/movies/genre/" + genreId, {
            method: "GET"
        }).then((res) => {
            $("#firstRow").empty();
            const top6 = res.slice(0, 6);
            top6.forEach(movie => {
                var newBlock = $("<div class='col-md-4'>")
                var newCard = $("<div class='card text-white bg-dark mb-3' style='max-width: 18rem;'></div")
                var newCardImage = $("<img src='' class='card-img-top cardImg' alt=''>")
                var newCardBody = $("<div class='card-body'></div")
                var newHeader = $("<h5 class='card-title'></h5")
                var newRatingP = $("<p class='card-text'>Rating: </p>")
                $(newHeader).append(movie.title)
                $(newRatingP).append(movie.rating)
                $(newCardImage).attr("src", movie.poster)
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