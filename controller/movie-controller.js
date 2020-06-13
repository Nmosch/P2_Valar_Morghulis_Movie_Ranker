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

router.post("/api/movies", async (req, res) => {
    try {
        const data = await db.movie.create(req.body);
            res.json(data);
        // console.log(`req.body`, req.body);
        // const findMovieTitle = await db.movie.findAll({ where: { title: req.body.title } })

        
        // // console.log(`find movie title`, findMovieTitle);
        // if (findMovieTitle.length === 0) {
        //     const data = await db.movie.create(req.body.title, req.body.genreId);
        //     res.json(data);
        // } else {
        //     let originalRating = await db.rating.findOne(req.body,{where:{title:req.body.title}});
        //     console.log(`this is updateRating`, originalRating.dataValues.rating);
        //     console.log(req.body.rating)
        //     const findMovieId= await db.movie.findOne(req.body, { where: {title:req.body.title} });
        //     console.log(`movie id`, findMovieId.dataValues.id);
        //     const count = await db.rating.findAndCountAll({ where: { movieId:findMovieId.dataValues.id}});
        //     console.log(count);

            // const ratingData = await db.rating.findAll({ where: { movieId: id }});
            
            // // const newRating = 
            // // const updateRate = (ratingdata + newRating) / count;
            
            // console.log(`this is data`, data)
            
            // console.log(`ratingdata ${ratingdata}`)
            
            // res.json(data)
        // }
        // console.log(`find movie ${findMovieTitle}`)

    } catch (error) {
        console.log(`error for post`, error);
        res.status(500).send();
    }
});

module.exports = router;
