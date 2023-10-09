const express = require("express");
const router = express.Router();
const orderController = require("../controller/order.controller.js");
const authenticate = require("../middlewares/authenticate.js");

router.post("/", authenticate, orderController.createOrder);
router.post("/user", authenticate, orderController.orderHistory);
router.post("/:id", authenticate, orderController.findOrderById);

module.exports = router;

