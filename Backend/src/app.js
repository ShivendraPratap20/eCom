require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 8000;
require("./db/conn");
const hmdt = require("../hmdt.json");
const getCollections = require("./getCollections");
const mong = require("./db/conn");
const UserModel = require("./db/Models/Users");
const { ObjectId } = require('mongodb');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Frontend/build')));
console.log(path.join(__dirname, '../../Frontend/build', 'index.html'))

app.get("/verification", auth, (req, res) => {
});
app.get("/test", (req, res) => {
    res.send(req.cookies.JWT);
});
app.get("/hmdt", (req, res) => {
    res.status(202).json(hmdt);
});
app.post("/login", async (req, res) => {
    try {
        const { username, userpassword } = req.body;
        const userData = await UserModel.find({ email: username });
        console.log(username);
        if (userData[0] == undefined){
            res.status(404).json({status:"FAILED", message:"User doesn't exists"});
            return;
        }
        const isMatch = await bcrypt.compare(userpassword, userData[0].password);
        if (!isMatch){
            res.status(404).json({status:"FAILED", message:"Password Incorrect"});
            return;
        }
        const token = await userData[0].generateToken();
        console.log(token);
        res.cookie("JWT", token, {
            maxAge: 30*24*60*60*1000
        });
        console.log(req.cookies.JWT);
        res.status(202).json({ status: "SUCCESS", message: "Login Success", userData: userData[0] });
    } catch (error) {
        console.log(`Login Error ${error}`);
        res.status(500).json({ status: "FAILED", message: "Internal server error" });
    }
});
app.post("/setAddress", async (req, res) => {
    try {
    
      const { _id, address } = req.body;
        console.log(_id);
        console.log(address);
      const updatedUser = await UserModel.findByIdAndUpdate(
        _id,
        { address },
        { new: true } 
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ status:"SUCCESS", message: "Address updated", user: updatedUser });
    } catch (error) {
      console.error("Error updating address:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
app.post("/register", async (req, res) => {
    const { name, email, phone, password, confirmPassword, gender } = req.body;
    try {
        const existsData = await UserModel.find({ email: email });
        if (existsData[0] != undefined) {
            res.status(409).json({status:"FAILED", message:"User already exixts"});
            return;
        }
        if (password !== confirmPassword || password.length < 8) {
            res.status(401).json({status:"FAILED", message:"Check your password or confirm password"});
            return;
        }
        const result = new UserModel({
            name, email, phone, password, gender
        });
        const token = await result.generateToken();
        console.log(token);
        res.cookie("JWT", token);
        const data = await result.save();
        console.log(`Data saved ${data}`);
        res.status(200).json({ status: "SUCCESS", message: "Registered successfully", data });
    } catch (error) {
        console.log(`Error occured while saving data ${error}`);
        res.status(500).json({ status: "FAILED", message: "Internal server error! Try again later" });
    }
});
app.get("/logout", (req, res)=>{
    try {
        console.log(req.cookies.JWT);
        res.clearCookie("JWT");
        console.log("Logout success");
        res.status(200).json({status:"SUCCESS", message:"Logout"});
    } catch (error) {
        console.log("Error occured while logout "+ error);
    }
})
app.post("/addProduct", async (req, res) => {
    try {
        const { userID, pID, pName, pCategory, pPrice, pImage } = req.body;
        console.log(`${pID, pName, pCategory}`);
        const objID = new ObjectId(userID);
        const user = await UserModel.findOneAndUpdate({ _id: objID }, {
            $push: {
                cartProduct: {
                    _id: pID,
                    name: pName,
                    category: pCategory,
                    salePrice: pPrice,
                    imageURL: pImage
                }
            }
        }, { new: true });
        console.log(user);
        console.log(`Added product to the cart`)
        res.json({ STATUS: "SUCCESS", message: "Added product to the cart" });
    } catch (error) {
        console.log(`Error occured while adding cart product ${error}`);
        res.status(505).json({ STATUS: "FAILED", message: "Error while adding product into cart" });
    }
});

app.post("/orders", async (req, res) => {
    try {
        const {productArray} = req.body;
        console.log(productArray);
        productArray.map(async (item, index)=>{
            const objID = new ObjectId(item.userID);
            const user = await UserModel.findOneAndUpdate({ _id: objID }, {
            $push: {
                orders: {
                    _id: item._id,
                    name: item.name,
                    category: item.category,
                    salePrice:item.price,
                    imageURL: item.imageURL
                }
            }
        }, { new: true });
        console.log(user);
        console.log(`Order Placed`)
        });
        res.json({ STATUS: "SUCCESS", message: "Order Placed", order:"OK" });
    } catch (error) {
        console.log(`Error occured while adding cart product ${error}`);
        res.status(505).json({ STATUS: "FAILED", message: "Error while adding product into cart" });
    }
});

app.delete("/removeProduct",  async (req, res)=>{
    try {
        const {userID, productID} = req.query;
        console.log(userID);
        console.log(productID)
        const result = await UserModel.updateOne(
            { _id: new ObjectId(userID) },
            { $pull: { cartProduct: { _id: new ObjectId(productID) } } }
          );
          if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Product not found in cart' });
          }
          res.json({ message: 'Product removed from cart successfully' });
    } catch (error) {
       console.log(`Error occured while removing product ${error}`) ;
       res.status(505).json({"message":"Failed"});
    }
});


app.get("/categoryDt/:category", async (req, res) => {
    try {
        const db = mong.connection.db;
        const colAry = await db.listCollections().toArray();
        const collectionNames = colAry.map(col => col.name);
        const matchedCategory = collectionNames.find(
            name => name.toLowerCase() === req.params.category.toLowerCase()
        );

        if (!matchedCategory) {
            return res.status(404).json({ STATUS: 'FAILED', message: 'Category not found' });
        }

        const col = db.collection(matchedCategory);
        const product = await col.find({}, {
            projection: { _id: 1, name: 1, category: 1, brand: 1, originalPrice: 1, salePrice: 1, imageURL:1 }
        }).toArray();

        res.json(product);
    } catch (error) {
        console.log(`Error occurred while retrieving data of category: ${error}`);
        res.status(500).json({ STATUS: 'FAILED', message: error.message });
    }
}
);
app.get("/search", async (req, res) => {
    try {
        const { keywords } = req.query;
        const db = mong.connection.db;
        const collections = await db.listCollections().toArray();

        const allDocuments = [];

        for (const val of collections) {
            const collection = db.collection(val.name);
            const docs = await collection.find().toArray();

            docs.forEach(doc => {
                allDocuments.push(doc);
            });
        }
        const matchedDocs = allDocuments.filter(doc => {
            if (Array.isArray(doc.searchKeywords)) {
                return doc.searchKeywords.some(keyword =>
                    keyword.toLowerCase().includes(keywords.toLowerCase())
                );
            }
            return false;
        });

        res.status(200).json(matchedDocs);

    } catch (error) {
        console.error("Error filtering documents:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.get("/getCollections", async (req, res) => {
    try {
        const result = await getCollections();
        res.send(result);
    } catch (error) {
        console.log(`Error occured while fetching data from the database ${error}`);
        res.status(505).json({ status: "FAILED", "message": "Internal server error" })
    }
});

app.get("/singlePdt/", async (req, res) => {
    console.log(req.query);
    const { category, _id } = req.query;
    const objID = new ObjectId(_id);
    try {
        const db = mong.connection.db;
        const col = db.collection(category);
        console.log(col);
        const singlePdt = await col.find({ _id: objID }).toArray();
        console.log(singlePdt)
        res.json(singlePdt);
    } catch (error) {
        console.log(`Error occured while fetching product ${error}`);
        res.status(505).json({ STATUS: "FAILED", message: "Products not fetched" });
    }
});
app.post("/help", (req, res)=>{
    const {ques} = req.body;
    console.log(ques);
    res.json({"STATUS":"SUCCESS", "message":"Send"})
});


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../../Frontend/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
})