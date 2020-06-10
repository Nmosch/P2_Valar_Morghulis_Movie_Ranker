const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/movies", async (req, res) => {
    try {
        const data = await db.movie.findAll();
        res.render("mainpage", { movies: data });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

router.get("/api/movies", async (req, res) => {
    try {
        const data = await db.movie.findAll();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
})
router.get("/api/movies/:id", async (req, res) => {
    try {
        const data = await db.movie.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

router.post("/api/movies", async (req, res) => {
    try {
        const data = await db.movie.create(req.body);
        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

module.exports = router

// Review.findAll({
//     attributes: ['venueId', [models.sequelize.fn('AVG', models.sequelize.col('venue_id')), 'venueIdCount']],
//     group: 'venue_id'
//     order: [[models.sequelize.fn('AVG', models.sequelize.col('venue_id')), 'DESC']]
//  }).then(function() {
//     //Do something
//  }})