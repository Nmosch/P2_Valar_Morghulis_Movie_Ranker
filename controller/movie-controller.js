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
        console.log(req.body);
        const data = await db.movie.create(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

module.exports = router;
