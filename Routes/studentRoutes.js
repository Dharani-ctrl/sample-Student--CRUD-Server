const express = require('express');
const router = express.Router();

const {getStudents, addStudent } = require('../controller/studentController');


router.get("/",getStudents);
router.post("/",addStudent);

exports.module = router;