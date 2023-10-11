const CartItem = require("../models/cartItem.model");
const cartService = require("../services/cart.service.js")

const findUserCart = async (req,res) =>{
    const user = req.user;
    try {
        const cart = await cartService.findUserCart(user.id);
        return res.status(200).json(cart);
        
        
    } catch (error) {
        return res.status(500).send({error:error.message });
        
    }

}



  

const addItemToCart = async (req,res) =>{
    const user = req.user;
    try {
         await cartService.addCartItem(user._id.toString(),req.body);

        return res.status(200).send(CartItem);
        
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

}

module.exports = {
    findUserCart,
    addItemToCart,

}


