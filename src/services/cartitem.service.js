const userService= require("../services/user.service.js");
const CartItem = require("../models/cartItem.model.js")

async function updateCartItem(userId, CartItemId, cartItemData){
    try {
        const item = await findCartItemById(CartItemId);
        if(!item){
            throw new Error("cart item not found :" , CartItemId )
        }
        const user = await userService.findUserbyId(item.userId);
        if(!user){
            throw new Error("user not found :" , userId);
        }
        if(userId.toString() === userId.toString()){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity* item.product.price;
            item.discountedPrice = item.quantity* item.product.discountedPrice;
            
            const updatedCartItem = await item.save();
            return updatedCartItem;


        }
        else{
            throw new Error("you cant update this cart item");
        }
        
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removedCartItem(userId, cartItemId){
    const cartItem  = await findCartItemById(cartItemId);
    const user = await userService.findUserbyId(userId);

    if(user._id.toString() === cartItem.userId.toString()){
        await CartItem.findByIdAndDelete(cartItemId)
    }
    else{
    throw new Error("you cant remove another user's item")
}

}

async function findCartItemById(cartItemId){
    const cartItem = await findCartItemById(cartItemId);
if(cartItem){
    return cartItem
}
else{
    throw new Error("cart item not found with id", cartItemId)
}
}

module.exports = {
    updateCartItem,
    removedCartItem,
    findCartItemById,
    
}