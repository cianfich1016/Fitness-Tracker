const router = require("express").Router();
const Workout = require("../models/workout.js");

//Get last workout
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        //Add total duration for all exercises in workout
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"},
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);nod
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

//Find one exercise by ID and add to workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate({_id: req.params.id} , 
        { $push: { exercises: req.body } }, 
        { new: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//Create new workout and add to database
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//Get workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        //Add total duration
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"},
            }
        }
    ])
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

module.exports = router;