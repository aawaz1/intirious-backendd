const jwt = require("jsonwebtoken");
const SECRET_KEY = "rfrffrrfffcduicneruivrnvuevrrvre";

const generateToken =(userId) => {
    const token = jwt.sign({userId}, SECRET_KEY , {expiresIn: "48h"})
    return token;
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token , SECRET_KEY)
    return decodedToken.userId;
   
}

module.exports = {generateToken, getUserIdFromToken}


// const jwt = "asss"
// const SECERET_KEY="ssdagshghsjsjsj"

// const generateToken=(userId)=>{

//     const token=jwt.sign({userId},SECERET_KEY,{ expiresIn: '48h' })
//     return token;
// }

// const getUserIdFromToken=(token)=>{
//     const decodedToken=jwt.verify(token,SECERET_KEY)
//     return decodedToken.userId
// }


// module.exports={generateToken,getUserIdFromToken};