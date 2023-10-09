const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller.js");

router.get("/",cartController.findUserByCart);
router.put("/add",  cartController.addItemToCart);

module.exports = router;
