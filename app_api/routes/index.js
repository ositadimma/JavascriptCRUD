const express = require('express');
const router = express.Router();
const ctrlDetails = require('../controllers/details');
const ctrlAccounts = require('../controllers/accounts');

//Users
router
  .route('/Users')
  .get(ctrlDetails.detailsReadMany)
  .post(ctrlDetails.detailsCreate);
 
router
  .route('/Users/:id')
  .get(ctrlDetails.detailsReadOne)
  .put(ctrlDetails.detailsUpdateOne)
  .delete(ctrlDetails.detailsDeleteOne);  

router.post('/register', ctrlAccounts.register)
router.post('/login', ctrlAccounts.login)



module.exports = router;  