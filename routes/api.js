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
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log("Workout was created.")
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findOneAndUpdate(params.id , 
        { $push: { exercise: body } }, 
        { new: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;