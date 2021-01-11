const router = require('express').Router();

//student DB||model
const Student = require('../model/Student')

//@desc to post new student data
//@route post /student/newstudent
router.post("/newstudent", (req, res) => {
    const { name, mob1, mob2, dob, sex, bloodGroup,
        nameOfGuardian, addressOfGuardian, relationGuardin,
        occupationOfGuardian, religion, prevShool, residence,
        course, sem, batch, sslc, hss, specialProblem, recommanted } = req.body;

    if (!name || !mob1 || !dob || !sex || !bloodGroup ||
        !nameOfGuardian || !addressOfGuardian || !relationGuardin ||
        !occupationOfGuardian || !religion || !prevShool ||
        !residence || !course || !batch)
        return res.json({ error: 'enter required fields' });

    new Student({
        name,
        mob1,
        mob2,
        dob,
        sex,
        bloodGroup,
        nameOfGuardian,
        addressOfGuardian,
        relationGuardin,
        occupationOfGuardian,
        religion,
        prevShool,
        residence,
        course,
        sem,
        batch,
        sslc,
        hss,
        specialProblem,
        recommanted

    }).save().then(savedData => {
        res.json(savedData)
    })
        .catch(e => {
            console.log('\u{1F525} on Ass error in save new student', e);
        })

})


//@dsc for deletig studets
//@route put /student/delete

router.delete("/delete", (req, res) => {
    Student.findByIdAndDelete(req.body.id)
        .then(data => res.json(data))
        .catch(e => {
            console.log('\u{1F525} on Ass error in delete student', e);
        })

})


//@dsc for show all  studets
//@route get /student/all

router.get('/all', (req, res) => {
    Student.find().then(data => {
        res.json(data)
    })
        .catch(e => {
            console.log('\u{1F525} on Ass error in all data', e);
        })
})

//@desc for filter
//@route get /student/filter

router.get('/filter', (req, res) => {

    Student.find().select('course batch sem')
        .exec((err, filter) => {
            if (err) {
                console.log('error in filter', err);
                res.json({ error: 'something went wrong contact mr Nizam' })
            }
            else {
                res.json(filter)
            }
        })
})


//@desc for filter students data
//@route get /student/filterStudent

router.get('/filterStudent', (req, res) => {

    const { course, batch, sem } = req.body
    Student.find({
        $and: [{ course: course }, { batch: batch }, { sem: sem }]
    }).then(data => {
        res.json(data)

    }).catch(e => {
        console.log('\u{1F525} on Ass', e);
        res.json({ error: 'something went wrong contact the dev' })
    })
})


module.exports = router;