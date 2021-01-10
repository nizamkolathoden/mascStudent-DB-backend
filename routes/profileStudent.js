const router = require('express').Router();

//student DB
const Student = require('../model/Student');

router.get("/:id",(req,res)=>{
    Student.findById(req.params.id).then(data=>{
        res.json(data)
    })
    .catch(e=>{
        console.log('error in find profile',e);
    })
})