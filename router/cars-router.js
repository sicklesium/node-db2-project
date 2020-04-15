const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();


router.get("/", (req, res) => {
    db("cars")
        .then((cars) => {
            res.json(cars);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error retrieving the cars list." });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    db("cars")
        .where({ id })
        .first()
        .then((car) => {
            res.json(car);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error retrieving the car." });
        });
});

router.post("/", (req, res) => {
    const carData = req.body;

    db("cars")
        .insert(carData)
        .then((car) => {
            res.status(201).json(car);
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: "There was an error posting to the cars list." });
        });
});

module.exports = router;