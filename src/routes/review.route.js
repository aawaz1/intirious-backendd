const express = require("express");
const authenticate = require("../middlewares/authenticate.js");
const router = express.Router();
const reviewController = require("../controller/review.controller.js");

router.get("/product/:productId", authenticate, reviewController.getAllReview);
router.post("/create", authenticate, reviewController.createReview);





module.exports = router;



