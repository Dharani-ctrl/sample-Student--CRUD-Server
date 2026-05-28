const Student = require('../model/studentModel');

// Add Student
const addStudent = async (req, res)=>{
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.json(newStudent); 
    } catch (error) {
        // res.json(500)
        // console.log("Add Student Error");
        res.status(500).json("Add Student Error")
    }

}

// Get Students
const getStudents = async (req, res)=>{
    try {
        const students = await students.find();
        res.json(students);
    } catch (error) {
        res.status(500).json("Get Students Error");
    }
}

module.exports= {
    addStudent,
    getStudents
};
