const jwt = require("jsonwebtoken");
const UserModel = require("../db/Models/Users");
const { ObjectId } = require('mongodb');

const auth = async (req, res, next)=>{
    try {
        const userToken = req.cookies.JWT;
        if(userToken == undefined) {
            throw new Error(`User token is undefined`);
        }
        const {_id, iat} = jwt.verify(userToken, "asdfghjklzxcvbnmqwertyuiop");
        const userID = _id;
        const objId = new ObjectId(userID);
        const userData = await UserModel.find({ _id: objId });
        res.json({status:"AUTHORIZED", data:userData}); 
        next();
    } catch (error) {
        console.log(`Can't authenticate ${error}`);
        res.status(401).send({status:"UNAUTHORIZED"});
    }   
   
};
module.exports = auth;