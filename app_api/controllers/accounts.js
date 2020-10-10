const passport= require('passport')
const bcrypt= require('bcryptjs')


//Load Model
const Account = require('../models/account')


const register= (req,res)=>{
    let errors=[]
    if(!req.body.username || !req.body.password){
        errors.push({msg: 'fill in both fields'})
    }
    if(errors.length>0){
        res.json(errors)
    }
    
    //Create new account
     const newAccount= new Account({
        username: req.body.username,
        password: req.body.password
     })

     //Hash password
     bcrypt.genSalt(10, (err, salt)=> 
       bcrypt.hash(newAccount.password, salt, (err,hash)=>{
        //Set password to hashed
         newAccount.password= hash
         console.log(newAuth)
        //Save account
         newAccount.save().then(account=>{
            req.flash('success_msg', 'you are now registered and can log in') 
            res.redirect('/login')
         })
         .catch(err => console.log(err))
     })
    )
}



const login= (req, res, next)=>{
    if (!req.body.username || !req.body.password){
        return res
        .status(400)
        .json({message: 'both fields required'})
    }
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true   
    })(req, res, next)
}    



module.exports={
    register,
    login
}
