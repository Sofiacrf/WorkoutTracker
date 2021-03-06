const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(), 
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter an exercise type"
            },
            name: {
                type: String,
                required: "Please entener a name"
            },
             duration: {
                 type: Number,
                 required: "Please enter your duration"
             },
             weight: {
                 type: Number
             },
             reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
});

 const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
