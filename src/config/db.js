const { default: mongoose } = require("mongoose")

const mongodbUrl = "mongodb+srv://adilnawazz7860:anik123@cluster0.ktctiag.mongodb.net/intirious-ecommerce"

const connectDB =() => {
    return mongoose.connect(mongodbUrl);
}

module.exports = {connectDB}