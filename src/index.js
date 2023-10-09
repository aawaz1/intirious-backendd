const express = require('express')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.get("/" , (req,res) =>{
    return res.status(200).send({
        message : "Welcome to E-Commerce Backend ",
        status : true,
    });
});

const authRoutes = require("./routes/auth.route.js");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/user.route.js");
app.use("/api/users", userRoutes);

const productRoutes = require("./routes/product.route.js");
app.use("/api/products", productRoutes);

const adminProductRoutes = require("./routes/adminProduct.route.js");
app.use("/api/admin/products", adminProductRoutes);

const cartRoutes = require("./routes/cart.route.js");
app.use("/api/cart", cartRoutes);

const cartItemRoutes = require("./routes/cartItem.route.js");
app.use("/api/cartitem", cartItemRoutes)

const orderRoutes = require("./routes/order.route.js");
app.use("/api/orders", orderRoutes)

const adminOrderRoutes = require("./routes/adminOrder.route.js");
app.use("/api/admin/orders" , adminOrderRoutes);

const reviewRoutes = require("./routes/review.route.js");
app.use("/api/reviews", reviewRoutes);
 
const ratingRoutes = require("./routes/rating.route.js");
app.use("/api/reviews", ratingRoutes);


module.exports = app;
