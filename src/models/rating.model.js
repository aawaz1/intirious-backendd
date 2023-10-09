const mongoose = require("mongoose")

const ratingScehma = new mongoose.Schema({
    users :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true,
        
    },
    product :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "products",
        required : true,
        
    },

    rating : {
        type: Number,
        required : true,
    },
    createdAt : {
        type: Date,
        default : Date.now,
        
    },
    

})

const Rating = mongoose.model('ratings' ,ratingScehma);

module.exports = Rating;