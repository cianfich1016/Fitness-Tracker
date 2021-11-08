const router = require("express").Router();
const Workout = require("../models/workout.js");

//Get last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({}) 
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

//Get workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

//Create new workout and add to database
router.post("/api/workouts", (req, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


module.exports = router;