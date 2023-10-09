const CartItem = require("../models/cartItem.model");
const cartService = require("../services/cart.service.js")

const findUserByCart = async (req,res) =>{
    const user = req.user;
    try {
        const cart = await cartService.addCartItem(user._id);
        return res.status(200).send(CartItem);
        
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

}

const addItemToCart = async (req,res) =>{
    const user = req.user;
    try {
        const cart = await cartService.addCartItem(user._id,req.body);

        return res.status(200).send(CartItem);
        
        
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }

}

module.exports = {
    findUserByCart,
    addItemToCart,

}