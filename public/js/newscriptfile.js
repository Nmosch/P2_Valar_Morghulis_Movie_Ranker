$(document).ready(function () {
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