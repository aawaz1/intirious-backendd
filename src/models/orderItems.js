const mongoose = require("mongoose")

const orderItemScehma = new mongoose.Schema({
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'products',
        required : true,
         },

    size : {
    type : String,
    },
    
    quantity : {
        type: Number,
       required : true,
      
    },
    price :{
        type: Number,
        required : true,
    },
   
     discountedPrice: {
        type : Number,
         required : true,
      
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true,

       
    },
    
    
   
    

})

const OrderItem = mongoose.model('orderItems' ,orderItemScehma);

module.exports = OrderItem;