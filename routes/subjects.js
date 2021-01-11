const router = require('express').Router();
const Student = require('../model/Student')

//@desc for adding subjects
//@route put subject/addsubjects
router.put("/addsubjects", (req, res) => {
    const { name, sem } = req.body
    if (!name || !sem) return res.json({ error: 'fill all required fields' })
    const subjects = {
        name,
        sem
    }
    Student.findByIdAndUpdate(req.body.id, {
        $push: { subjects: subjects }
    }, {
        new: true
    }).exec((e, data) => {
        if (e) console.log('\u{1F525} on Ass error in adding subjects', e);
        res.json(data);
    })
})


//@desc for adding specifig subject pass or fail
//@route put subject/pass
router.put("/pass", (req, res) => {
    
    Student.findOneAndUpdate({"subjects._id":req.body.id}, {
        $set: {"subjects.$.pass": true} 
    }, {
        new: true
    }).exec((e, data) => {
        if (e) console.log('\u{1F525} on Ass error in adding subjects', e);
        res.json(data);
    })
})


module.exports = router