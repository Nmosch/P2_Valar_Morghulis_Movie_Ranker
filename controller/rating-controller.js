const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/movies",async(req,res)=>{ 
    try {
        const data = await db.rating.findAll();
        res.render("mainpage", {ratings:data})
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.get("/api/rating", async(req,res)=>{
    try {
        const data = await db.rating.findAll();
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
 });
 router.get("/api/user/rating/:id", async (req, res) => {
    try {
      const data = await db.rating.findAll({
        where: {
          user_id: req.params.id
        }
      });
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  });
  
  router.get("/api/movies/rating/:id",async(req,res)=>{
        try{
            const data = await db.movie.findAll({
                where: {
                    genreId: req.params.id
                }
            }); 
            const moviePush = async (data) => {
            for (let i=0; i < data.length; i++){ //You may need to change this to run the proper number of times based on your DB size
            const averageRating = await db.sequelize.query(`SELECT AVG(rating.rating) as "average_rating" FROM rating WHERE rating.movieId = ${movieIconInfo.id} GROUP BY rating.movieId`,{ type: QueryTypes.SELECT });
            movieAve = {
                id: data[i].id,
                rating: averageRating[0].average_rating
            };
            console.log(data);
           console.log(moviePush)
        }};
            res.json(movieAve);
        }catch (error){
            console.log(error);
            res.status(500).send();
        }
})
router.post("/api/rating",async(req,res)=>{
    try {
        const data = await db.rating.create(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
})


module.exports = router
