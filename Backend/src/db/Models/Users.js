const mong = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mong.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
    gender: { type: String },
    address:{type:String},
    cartProduct:[
        {
            _id:{type:String},
            name:{type:String},
            category:{type:String}, 
            salePrice:{type:String},
            imageURL:{type:String}
        }
    ],
    orders:[
        {
            _id:{type:String},
            name:{type:String},
            category:{type:String}, 
            salePrice:{type:String},
            imageURL:{type:String}
        }
    ],
    review:[
        {
            productID:{type:String},
            ratings:{type:Number},
            review:{type:String}
        }
    ],
    tokens:[
        {token:{
            type:String
        }}
    ]
});

userSchema.methods.generateToken = async function(){
    try {
        const token = await jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        console.log(`Token generated at generate token function ${token}`);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(`Error while generating token ${error}`);
    }
};

userSchema.pre("save", async function (next){
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const UserModel = mong.model("User", userSchema);

module.exports = UserModel;