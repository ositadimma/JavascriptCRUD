const mongoose = require('mongoose');
const Details= require('../models/userdetails')




//create new user
const detailsCreate = function (req, res) {
 const newUserDetails= new Details({
   firstname: req.body.firstname,
   lastname: req.body.lastname,
   gender: req.body.gender,
   date_of_birth: req.body.date_of_birth
  })
  newUserDetails.save()
  res
    .status(201)
    .json(userDetails)
}


//read one set of user details
const detailsReadOne = function (req, res) {
  if (req.params && req.params.id) {
    Details
      .findById(req.params.id)
      .exec((err, user) => {
        if (!user) {
          res	
            .status(404) 
            .json({	
              "message": "userid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(user);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No userid in request"
      });		
  }
};



//read many users
const detailsReadMany= function (req, res) {

  const filter

  if((req.query.filter_field && req.query.filter_value)  || req.query.sortBy){
    if(req.query.filter_field && req.query.filter_value){
     filter= {"req.query.filter_field": req.query.filter_value}
    }
    if(req.query.sortBy) {
      const sortBy= []
      sortBy= req.query.sortBy.split(':')
      if(sortBy[1]==='asc'){
          User
           .find(filter)
           .sort([[sortBy[0], 1]])
           .exec((err,users)=> {
          res.json(users)
      })} else if(sortBy[1]==='desc'){
          User
          .find(filter)
          .sort([[sortBy[0], -1]])
          .exec((err,users)=> {
        res.json(users)
      })}else{
     res
     .status(400)
     .json({message:'please enter a valid order'})
 }}
}else {
  if(err) throw err
  User.find().exec((users)=> {
    res.json(users)
  })
}}


//update one user
const detailsUpdateOne = function (req, res) {
  if (!req.params.id) {
    res
      .status(404)
      .json({
        "message": "Not found, user id is required"
      });
    return;
  }
  User
    .findById(req.params.id)
    .exec((err, user) => {
      if (!user) {
        res
          .json(404)
          .status({
            "message": "userid not found"
          });
        return;
      } else if (err) {
        res
          .status(400)
          .json(err);
        return;
      }
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.gender = req.body.gender
      user.date_of_birth = req.body.date_of_birth;
      user.date_updated= Date.now

      user.save((err, user) => {
        if (err) {
          res
            .status(404)
            .json(err);
        } else {
          res
            .status(200)
            .json(user);
        }
      });
    }
  );
};


//delete user
const detailsDeleteOne = function (req, res) {
  const userid = req.params.id;
  if (userid) {
    Loc
      .findByIdAndRemove(userid) 
      .exec((err, user) => {
          if (err) {
            res
              .status(404)
              .json(err);
            return;
          }
          res
            .status(204)
            .json(null);
        }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "userid"
      });
  }
};

module.exports = {
  detailsCreate,
  detailsReadOne,
  detailsReadMany,
  detailsDeleteOne,
  detailsUpdateOne,
};
