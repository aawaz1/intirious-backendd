// const User = require("../models/user.model");
// const bcrypt = require("bcrypt");
// const jwtProvider = require("../config/jwtProvider.js")

// const createUser = async (userData) => {
//     try {
//         let {firstName , lastName, email, password, } = userData;
//         const isUserExist=await User.findOne({email});
//         if(isUserExist){
//             throw new Error("User already exits with email :" , email)
//         }
//         password = await bcrypt.hash(password, 8);
//         const user = await User.create({firstName,lastName,email,password});
//         console.log("created user" , user)
//         return user

//     } catch (error) {
//         throw new Error(error.message)
        
//     }
// }
 
// const findUserbyId = async (userId) => {
//     try {
//         const user = await User.findById(userId)
//         // .populate("address")
//         if(!user){
//             throw new Error("user not found with id : " , userId)
//         }
//         return user;
//        } catch (error) {
//         throw new Error(error.message)
        
//     }
// }
 
// const getUserByEmail = async (email) => {
//     try {
//         const user = await User.findOne({email});
//         if(!user){
//             throw new Error("user not found with id : " , email)
//         }
//         return user ;
//        } catch (error) {
//         throw new Error(error.message)
        
//     }
// }

// // const getUserByEmail=async(email)=>{
// //     try {

// //         const user=await User.findOne({email});

// //         if(!user){
// //             throw new Error("user found with email : ",email)
// //         }

// //         return user;
        
// //     } catch (error) {
// //         console.log("error - ",error.message)
// //         throw new Error(error.message)
// //     }
// // }

// const getUserProfileByToken = async(token) => {
//     try {
//         const userId = jwtProvider.getUserIdFromToken(token);
//         const user = await findUserbyId(userId)
//         if(!user){
//             throw new Error("user not added with id :" ,userId)
//         }
//         return user;
        
//     } catch (error) {
//         throw new Error(error.message)
        
//     }
// }

// const getAllUsers =  async () => {
//     try {
//         const users = await User.find();
//         return users
        
//     } catch (error) {
//         throw new Error(error.message)
        
//     }
// }
// module.exports = {
//     createUser ,
//      findUserbyId , 
//      getUserByEmail , 
//      getAllUsers, 
//      getUserProfileByToken}


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model.js');
const jwtProvider=require("../config/jwtProvider")

const createUser = async (userData)=>{
    try {

        let {firstName,lastName,email,password}=userData;

        const isUserExist=await User.findOne({email});


        if(isUserExist){
            throw new Error("user already exist with email : ",email)
        }

        password=await bcrypt.hash(password,8);
    
        const user=await User.create({firstName,lastName,email,password})

        console.log("user ",user)
    
        return user;
        
    } catch (error) {
        console.log("error - ",error.message)
        throw new Error(error.message)
    }

}

const findUserById=async(userId)=>{
    try {
        const user = await User.findById(userId);
        if(!user){
            throw new Error("user not found with id : ",userId)
        }
        return user;
    } catch (error) {
        console.log("error :------- ",error.message)
        throw new Error(error.message)
    }
}

const getUserByEmail=async(email)=>{
    try {

        const user=await User.findOne({email});

        if(!user){
            throw new Error("user found with email : ",email)
        }

        return user;
        
    } catch (error) {
        console.log("error - ",error.message)
        throw new Error(error.message)
    }
}

const getUserProfileByToken=async(token)=>{
    try {

        const userId=jwtProvider.getUserIdFromToken(token)

        console.log("userr id ",userId)


        const user= (await findUserById(userId));
        user.password=null;
        
        if(!user){
            throw new Error("user not exist with id : ",userId)
        }
        return user;
    } catch (error) {
        console.log("error ----- ",error.message)
        throw new Error(error.message)
    }
}

const getAllUsers=async()=>{
    try {
        const users=await User.find();
        return users;
    } catch (error) {
        console.log("error - ",error)
        throw new Error(error.message)
    }
}

module.exports={
    createUser,
    findUserById,
    getUserProfileByToken,
    getUserByEmail,
    getAllUsers
}
