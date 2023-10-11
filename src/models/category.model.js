const mongoose = require("mongoose")

const categoryScehma = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        maxlength : 50,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
      },
    level : {
        type: Number,
        required : true,
        
    },
    

})

const Category = mongoose.model('categories' ,categoryScehma);

module.exports = Category;