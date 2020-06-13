const express = require("express");
const router = express.Router();
const db = require("../models");


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
router.get("/api/movies/genre/:id", async(req, res)=>{
    try{

        const data = await db.movie.findAll({
            where: {
                genreId: req.params.id
            }
        });
        res.json(data);
    }catch (error){
        console.log(error);
        res.status(500).send();
    }
});

router.post("/api/movies",  (req, res) => {
    try {

        db.movie.findAll({where: {
            title: req.body.title
        }}).then(function(results) {
            let pos = results.map(function(e) { return e.title; }).indexOf(req.body.title);
            if (pos === -1){
                db.movie.create({title: req.body.title,
                                moviePoster: req.body.moviePoster,
                                genreId: req.body.genreId})
                .then(function(data){
                  res.json(data);
                });
            } else {
                console.log(req.body);
                db.rating.create({rating: req.body.rating,
                                movieId: results[0].id,
                                userId: req.body.userId})
                .then(function(){
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
