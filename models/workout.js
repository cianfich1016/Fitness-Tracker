//Require Mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create collection schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
          type: {
              type: String,
              trim: true,
              required: "Type of exercise is required."
          },  
          name: {
              type: String,
              trim: true,
              required: "Name of exercise is required."
          },
          duration: {
              type: Number,
              required: "Duration is required."
          },
          weight: {
              type: Number,
          },
          reps: {
              type: Number,
          },
          sets: {
              type: Number,
          },
          distance: {
              type: Number,
          }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;