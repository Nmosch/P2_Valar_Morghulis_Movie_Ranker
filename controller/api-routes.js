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
router.get("/api/genre", async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
});

router.get("/api/genre/:id", async (req, res) => {
    try {

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
})
//  not sure about this part yet. 
// router.put("/api/movies/rating",(req,res)=>{
//     try {

//     } catch (error) {
//         console.log(error);
//         res.status(500).send();
//     }
// });
module.exports = router
