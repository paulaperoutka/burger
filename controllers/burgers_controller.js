const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
//hbs=handlebars object
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name"], 
    [req.body.burger_name],
    (result) => {
      res.json({ id: result.insertId});
      // res.redirect("/");
    }
  );
});

router.put("/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  }, condition, (data) => {
    // if (result.changedRows == 0) {
    //   return res.status(404).end();
    // } else {
    //   // res.redirect("/");
    //   res.status(200).end();
    // }
    res.redirect("/");
  });
});

module.exports = router;