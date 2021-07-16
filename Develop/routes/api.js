const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workout", (req, res) => {
    Workout.create({})
    .then((userDbWorkout) => {
        res.json(userDbWorkout);
    }).catch((err) => {
        res.json(err);
    })
})

// router.put workouts by id workout.findbyid and update
// router.get workout.agregate api/workouts
//router.get workout.agregate api/workouts/range
//router.delete api/workouts workout.findbyid and delete


model.exports= router;