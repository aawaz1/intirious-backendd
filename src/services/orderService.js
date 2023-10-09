const cartService = require("../services/cart.service.js");
const Address = require("../models/address.model.js");
const Order = require("../models/order.model.js");


async function createOrder(user,shipAddress){
    let address;

    if(shipAddress._id){
        let existAddress = await Address.findById(shipAddress._id);
        address = existAddress;

    }
    else{
        address = new Address(shipAddress);
        address.user = user;
        await address.save();

        user.addresses.push(address);
        await user.save();
    }
    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];
    for(const item of cart.cartItems){
        const orderItem= new orderItems({
            price : item.price,
            product: item.product,
            quantity : item.quantity,
            size : item.size,
            userId: item.userId,
            discountedPrice : item.discountedPrice,
        })

        const createOrderItem = await orderItem.save();
        orderItems.push(createOrderItem)

    }

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice : cart.totalPrice,
        totalDiscountedPrice : cart.totalDiscountedPrice,
        totalItem : cart.totalItem,
        shipAddress : address,

    })

    const savedOrder = await createOrder.save();
    return savedOrder;
}

async function placeOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus= "placed";
    order.paymentDetails.status = "completed";
    return await order.save();

}
async function confirmedOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus= "CONFIRMED";

   
   
    return await order.save();

}
async function shipOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus= "SHIPPED";

   
   
    return await order.save();

}
async function deliverOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus= "DELIVERED";

   
   
    return await order.save();

}
async function cancelOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus= "CANCELLED";

   
   
    return await order.save();

}
async function findOrderById(){
    const order = await Order.findById(orderId)
    .populate('user')
    .populate({path : "orderItems",populate : {path : "product"} })
    .populate("shippingAddress")

    return order;

}

async function usersOrderHistory(userId){
    try {
        const orders = await Order.find({user: userId, orderStatus:"PLACED", })
        .populate({path: "orderItems", populate : {path:"populate"} }).lean()

        return orders;
        
    } catch (error) {
        throw new Error(error.message)

        
    }
}

async function getAllOrders(){
    return await Order.find()
    .populate({path: "orderItems", populate : {path:"populate"} }).lean()
}

async function deleteOrder(orderId){
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);


}

module.exports = {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    cancelOrder,
    findOrderById,
    usersOrderHistory,
    deleteOrder,

}