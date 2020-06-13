$( document ).ready(function() {
    
    function grabComedyMovies(){
        $.ajax("/api/movies/genre/1", {
            method: "GET"
        }).then((res)=>{
            console.log(res)
            // var items = [res]
            // var random = items[Math.floor(Math.random()* items.length )]

            // var cardInfo = [res.title];
            // var i;
            // for (i=0; i<cardInfo.length; i++){

            //     console.log(cardInfo[i])

            // }

            var newBlock = $("<div class='col-md-4'>")
            var newCard = $("<div class='card text-white bg-dark mb-3' style='max-width: 18rem;'></div")
            var newCardImage = $("<img src='' class='card-img-top cardImg' alt=''>")
            var newCardBody = $("<div class='card-body'></div")
            var newHeader = $("<h5 class='card-title'></h5")
            var newRatingP = $("<p class='card-text'></p>")
            $(newHeader).append("res.title[0]")
            $(newRatingP).append("res.rating[0]")
            $(newCardImage).attr("src", "res.moviePoster[0]")
            $(newCardImage).attr("alt", "https://via.placeholder.com/150")
            $(newCardBody).append(newHeader, newRatingP)
            $(newCard).append(newCardImage, newCardBody)
            $(newBlock).append(newCard)
            $("#firstRow").append(newBlock)
            
        })
    }

    $("#comedyMovies").click(function(){
        event.preventDefault();
        grabComedyMovies();
    })

});