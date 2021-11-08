const router = require("express").Router();
const db = require("../models");

//Get last workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}) 
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

//Create new workout and add 
router.post("/api/workouts", (req, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
