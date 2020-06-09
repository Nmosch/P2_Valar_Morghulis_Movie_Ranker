const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/genre", async (req, res) => {
    try {
        const data = await db.genre.findAll();
    
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

router.get("/api/genre/:id", async (req, res) => {
    try {
        const data = await db.genre.findOne({
            where:{
                id: req.params.id
            }
        });

    res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

module.exports = router
