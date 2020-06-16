const express = require("express");
const router = express.Router();
const db = require("../models");
const { QueryTypes } = require('sequelize');


router.get("/api/movies", async (req, res) => {
    try {
        const data = await db.movie.findAll();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});
router.get("/api/movies/:id", async (req, res) => {
    try {
        const data = await db.movie.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

router.get("/api/movies/genre/:id", async (req, res) => {
    try {
        const data = await db.movie.findAll({

            where: {
                genreId: req.params.id
            }
        });

        const moviePosterInfo = [];
        const moviePush = async (data) => {
            let i;
            for (i = 0; i < data.length; i++) {
                let movieIconInfo = {
                    id: data[i].id,
                    title: data[i].title,
                    poster: data[i].moviePoster,
                };
                const averageRating = await db.sequelize.query(`SELECT AVG(rating.rating) as "average_rating" FROM rating WHERE rating.movieId = ${movieIconInfo.id} GROUP BY rating.movieId`, { type: QueryTypes.SELECT });
                console.log(averageRating);
                movieIconInfo = {
                    id: data[i].id,
                    title: data[i].title,
                    poster: data[i].moviePoster,
                    rating: averageRating[0].average_rating
                };
                moviePosterInfo.push(movieIconInfo);
                console.log("Movie Icon Info", movieIconInfo);
            }
            console.log("Movie Poster Info", moviePosterInfo);
            res.json(moviePosterInfo);
        };
        moviePush(data);
        
    } catch (error) {

        console.log(data.count)
        res.json(data);
    }
});

router.post("/api/movies", (req, res) => {
    try {
        db.movie.findAll({where: {
            title: req.body.title
        }}).then(function(results) {
            let pos = results.map(function(e) { return e.title; }).indexOf(req.body.title);
            if (pos === -1){ 
                const defaultPoster= "https://critics.io/img/movies/poster-placeholder.png"
            
                db.movie.create({title: req.body.title,
                                moviePoster: req.body.moviePoster ==="N/A" ? defaultPoster : req.body.moviePoster,
                                genreId: req.body.genreId})
                .then(function(data){
                  res.json(data);
                });
            } else {
                console.log(req.body);
                db.rating.create({
                    rating: req.body.rating,
                    movieId: results[0].id,
                    userId: req.body.userId
                })
                    .then(function () {
                        res.json(results[0].id);
                    })
                    .catch(error => console.log(error));
            }
        });

    } catch (error) {
        console.log(`error for post`, error);
        res.status(500).send();
    }
});

module.exports = router;
