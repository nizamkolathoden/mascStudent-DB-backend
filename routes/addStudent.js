const router = require('express').Router();

//student DB||model
const Student = require('../model/Student')

//@desc to post new student data
//@route post /student/newstudent
router.post("/newstudent", (req, res) => {
    const { name, mob1, mob2, dob, sex, bloodGroup,
        nameOfGuardian, addressOfGuardian, relationGuardin,
        occupationOfGuardian, religion, prevShool, residence,
        course, sem,batch } = req.body;

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
        batch

    }).save().then(savedData => {
        res.json(savedData)
    })
        .catch(e => {
            console.log('error in save new student', e);
        })

})

//@dsc for adding remarks
//@route put /student/addremark/jan

router.put("/addremark/jan", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.jan": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/feb

router.put("/addremark/feb", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.feb": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/march

router.put("/addremark/march", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.march": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/jan

router.put("/addremark/april", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.april": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/may

router.put("/addremark/may", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.may": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})


//@dsc for adding remarks
//@route put /student/addremark/jun

router.put("/addremark/jun", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.jun": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/july

router.put("/addremark/july", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.july": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremarks/aug

router.put("/addremark/aug", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.aug": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/may

router.put("/addremark/sep", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.sep": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/oct

router.put("/addremark/oct", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.oct": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/nav

router.put("/addremark/nav", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.nav": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/oct

router.put("/addremark/oct", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.oct": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})

//@dsc for adding remarks
//@route put /student/addremark/dec

router.put("/addremark/dec", (req, res) => {
    const { id, boo } = req.body;
    Student.findByIdAndUpdate(id, {
        $set: {
            "remarks.dec": boo
        }
    }, {
        new: true
    }).then(data => res.json(data))
})


//@dsc for deletig studets
//@route put /student/delete

router.delete("/delete", (req, res) => {
    Student.findByIdAndDelete(req.body.id).then(data => res.json(data))
})


//@dsc for show all  studets
//@route get /student/all

router.get('/all', (req, res) => {
    Student.find().then(data=>{
        res.json(data)
    })
})

//@dsc for show all  studets
//@route get /student/all

router.get('/course', (req, res) => {
    Student.find().then(data=>{
        res.json(data)
    })
})


module.exports = router;