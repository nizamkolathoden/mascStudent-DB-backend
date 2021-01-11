const mongoose = require('mongoose');

const stdentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mob1: {
        type: Number
    },
    mob2: {
        type: Number
    },
    dob: {
        type: Date
    },
    sex: {
        type: String,
        default: "male"
    },
    bloodGroup: {
        type: String
    },
    //Gaurdin detials
    nameOfGuardian: {
        type: String
    },
    addressOfGuardian: {
        type: String
    },
    relationGuardin: {
        type: String
    },
    occupationOfGuardian: {
        type: String
    },
    religion: {
        type: String
    },
    prevShool: {
        type: String
    },
    residence: {
        type: String
    },
    extraAcivity: {
        type: String
    },
   specialAchiev: {
        type:String
   },
    interest: {
        type: String
    },

    email: {
        type: String
    },
    admissionSecured: {
        type: String
    },
    recommanted: {
        type: String
    },
    pic: {
        type: String
    },
    course: {
        type: String
    },
    sem: {
        type: String
    },
    batch:{
        type:String
    },

    //prev %

    sslc:{
        type:String
    },

    hss:{
        type:String
    },

    subjects: [{
        name: {
            type: String
        },
        pass: {
            type: Boolean
        },
        sem: {
            type: String
        }
    }],

        specialProblem:{
            type:String
        },
            maritalStatus:{
                type:Boolean
            },
    //remarks you can store remarks also in  array and just like inner objects 

        remarks:{
              jan:{
          type:Boolean,

        },
        feb:{ 
            type:Boolean,

          },
        march:{
            type:Boolean,

          },
        april:{
            type:Boolean,

          },
        may:{
            type:Boolean,

          },
        jun:{
            type:Boolean,

          },
        july:{
            type:Boolean,

          },
        aug:{
            type:Boolean,

          },
        sep:{
            type:Boolean,

          },
        oct:{
            type:Boolean,

          },
        nov:{
            type:Boolean,

          },
        dec:{
            type:Boolean,

          }
        }
      
  

})

module.exports = mongoose.model("student", stdentSchema);