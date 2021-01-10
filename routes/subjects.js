const router = require('express').Router();
const Student = require('../model/Student')

//@desc for adding subjects
//@route put subject/addsubjects
router.put("/addsubjects",(req,res)=>{
    const {name,sem} = req.body
    if(!name||!sem) return res.json({error:'fill all required fields'})
    const subjects = {
        name,
        sem
    }
    Student.findByIdAndUpdate(req.body.id,{
        $push:{subjects:subjects}
    },{
        new:true
    }).exec((e,data)=>{
        if(e) console.log('error in adding subjects',e);
        res.json(data);
    })
})

module.exports = router