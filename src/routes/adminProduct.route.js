const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller.js");
const authenticate = require("../middlewares/authenticate.js");

router.post("/",productController.createProduct );
router.get("/creates" , productController.createMultipleProduct);
router.get("/:id",authenticate,productController.updateProduct );
router.get("/:id",authenticate,productController.deleteProduct );

module.exports = router;