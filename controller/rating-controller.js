const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/rating",async(req,res)=>{ 
    try {
        const data = await db.rating.findAll();
        res.render("rating", {ratings:data})
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
          user_id: req.params.is
        }
      });
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  });
  
  router.get("/api/movies/rating/:id",async()=>{
    try {
        const data = await db.rating.finall({
            where:{
                movie_id: req.params.id
            }
        });
        res.json(data)
    } catch (error) {
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
