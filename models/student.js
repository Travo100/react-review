const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    favSubject: {
        type: String,
        required: true
    },
    GPA: {
        type: Number,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;