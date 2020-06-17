const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/api/genre", async (req, res) => {
    try {
        const genreArray = [];
        const genrePush = async () =>{
            let i;
            for (i=1; i < 7; i++){
                const data = await db.movie.findAndCountAll({
                    where:{genreId: i}
                });
                let count = data.count;
                console.log(count);
                genreArray.push(count);
            }
            console.log(genreArray);
            res.json(genreArray);
        };
        genrePush();    
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

router.get("/api/genre/:id", async (req, res) => {
    try {
        const data = await db.movie.findAndCountAll({
            where: {
                genreId: req.params.id
            }
        });

        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

module.exports = router;
