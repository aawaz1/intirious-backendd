// const express = require("express");
// const router = express.Router();
// const productController = require("../controller/product.controller.js");
// const authenticate = require("../middlewares/authenticate.js");

// router.get("/", authenticate, productController.getAllProducts);
// router.get("/id/:id", authenticate, productController.findProductById);

// module.exports = router

const express=require("express");
const router=express.Router();
const productController=require("../controller/product.controller.js");

router.get('/', productController.getAllProducts);
router.get('/id/:id', productController.findProductById);
router.get('/search', productController.searchProduct);


module.exports = router;