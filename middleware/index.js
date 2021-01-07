//require
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

//database
const auth = require("../model/auth")

//middleware
module.exports = (req,res,next)=>{
                                                          
    const {authorization} = req.headers          
    console.log(authorization);          
    if(!authorization){                                                    
        return res.status(422).json({error:"you didnot get token"})
       
    }   
    //bearer is confussing                                                                     
   const token = authorization.replace("Bearer ","")                            
   jwt.verify(token,JWT_SECRET,(e,payload)=>{             
       if(e) return res.status(422).json({error:`invalid:${e}`})      
        // get id from jwt payload
       const {_id} = payload
       auth.findById({_id:_id}).then(userdata=>{
           // send user data from  collection of user to when it call 
           if(userdata){
                next()
           }else{
               res.json({error:'wrong username or password'})
           }
           
        })
        .catch(e=>{
          console.log(e)  
        })
      
   })
}