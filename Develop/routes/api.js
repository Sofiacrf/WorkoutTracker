const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then((userDbWorkout) => {
        res.json(userDbWorkout);
    }).catch((err) => {
        res.json(err);
    })
})

// router.put workouts by id workout.findbyid and update
router.put("/api/workouts/:id", ({body, params}, res) =>{
    Workout.findByIdAndUpdate(params.id)
        .then((userDbWorkout) => {
            res.json(userDbWorkout);
        }).catch((err) => {
            res.json(err);
        })
})
// router.get workout.agregate api/workouts
router.get("/api/workouts", (req, res) =>{
    Workout.aggregate([
        {
           $addSum:{ 
               totalDuration: {
                    $sum: "$exercises.duration",
               },
           },
        },
    ])
    .then((userDbWorkout) => {
        res.json(userDbWorkout);
    }).catch((err) => {
        res.json(err);
    });
});
//router.get workout.agregate api/workouts/range
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addSum: {
                totalDuration: {
                    $sum: `$exercises.duration`,  
                },
            },
        },
    ])
    .limit(7)
    .then((userDbWorkout) => {
        res.json(userDbWorkout);
    }).catch((err) => {
        res.json(err);
    });
});


module.exports= router;