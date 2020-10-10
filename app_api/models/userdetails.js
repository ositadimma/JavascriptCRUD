const mongoose= require('mongoose')
const AutoIncrement= require('mongoose-sequence')(mongoose)

const usersDetailsSchema= new mongoose.Schema({
    _id:{
        type: Number
    },
    firstname: {
        type: String,
        unique: true,
        required: true
      },
    lastname: {
          type: String,
          required: true
      },
    gender: {
          type: String
      },
    date_of_birth:{
        type: String,
    },
    date_created:{
        type: Date,
        default: Date.now
    },
    date_updated:{
        type: Date,
        default: Date.now
    }
      
})

detailSchema.plugin(AutoIncrement, {_id: 'order_seq', inc_field: '_id'})

const Details =mongoose.model('Detail', usersDetailsSchema)
module.exports= Details