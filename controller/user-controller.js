const express = require("express");
const passport = require("passport");
const router = express.Router();
const db = require("../models");

// Passport
require("../config/passport")(passport);
router.use(passport.initialize());
router.use(passport.session());

router.get("/movies", async (req, res) => {
  try {
    if (req.user) {
      let data = await db.user.findAll({where:{id:req.user.id}});
      
      const dataGenre = await db.genre.findAll();
      res.render("mainpage", { users: data, genre: dataGenre });
    
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);

    res.status(500).send();
  }
});

router.get(
  "/api/users",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const data = await db.user.findAll({ include: [db.history] });

      res.json(data);
    } catch (error) {
      console.error(error);

      res.status(500).send();
    }
  }
);

router.get("/api/users/:id", async (req, res) => {
  try {
    const data = await db.user.findAll({ where: { id: req.params.id }, include: [db.history] });

    res.json(data);
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

router.post(
  "/api/users",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const data = await db.user.create(req.body);

    res.json(data);
  }
);

router.delete(
  "/api/users/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const data = await db.user.destroy({ where: { id: req.params.id } });

      res.json(data);
    } catch (error) {
      console.error(error);

      res.status(500).send();
    }
  }
);

module.exports = router;
