const LocalStrategy= require('passport-local').Strategy
const mongoose= require('mongoose')

const bcrypt= require('bcryptjs')

//Load useraccount model 
const Account= require('../models/account')


module.exports= (passport) => {passport.use(new LocalStrategy(
    {usernameField: 'username'}, (username, password, done )=>{
       Account.findOne({username: username}).then((err, account)=>{
         if(err) throw err
         if(!account) {return done(null, false, {
             message: 'username is not registered'
            }
         )}

       bcrypt.compare(password, account.password, (err, isMatch)=>{
        if(err) throw err
        if(isMatch){
            return done(null, account)
        }else{
            return done(null, false, {message: 'passord incorrect'})
        }
       }).catch(err => Console.log(err))
        
    }
  )
  passport.serializeUser((account, done)=>{
      done(null, account.id)
  })

  passport.deserializeUser((id, done)=>{
    Account.findById(id, (err, account)=>{
        done(err, account)
    } ) 
    
})
})
)} 
