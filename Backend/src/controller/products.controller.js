const fs = require("fs");
const mong = require("../db/conn");
const { ObjectId } = require('mongodb');
const hmdt = require("../../hmdt.json");
const UserModel = require("../db/Models/Users");
const getCollections = require("../getCollections");
const productBaseModel = require("../db/Models/Product");

const getHomeData = (req, res) => {
    res.status(202).json(hmdt);
};

const addProductToUserCart = async (req, res) => {
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
};

const userOrderPlaced = async (req, res) => {
    try {
        const { productArray, userID } = req.body;
        console.log(productArray);
        productArray.map(async (item, index) => {
            const objID = new ObjectId(userID);
            const user = await UserModel.findOneAndUpdate({ _id: objID }, {
                $push: {
                    orders: {
                        _id: item._id,
                        name: item.name,
                        category: item.category,
                        salePrice: item.price,
                        imageURL: item.imageURL
                    }
                }
            }, { new: true });
            console.log(user);
            console.log(`Order Placed`)
        });
        res.json({ STATUS: "SUCCESS", message: "Order Placed", order: "OK" });
    } catch (error) {
        console.log(`Error occured while adding cart product ${error}`);
        res.status(505).json({ STATUS: "FAILED", message: "Error while adding product into cart" });
    }
};

const removeProductFromUserCart = async (req, res) => {
    try {
        const { userID, productID } = req.query;
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
        console.log(`Error occured while removing product ${error}`);
        res.status(505).json({ "message": "Failed" });
    }
};

const categoryData = async (req, res) => {
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
            projection: { _id: 1, name: 1, category: 1, brand: 1, originalPrice: 1, salePrice: 1, imageURL: 1 }
        }).toArray();

        res.json(product);
    } catch (error) {
        console.log(`Error occurred while retrieving data of category: ${error}`);
        res.status(500).json({ STATUS: 'FAILED', message: error.message });
    }
};

const searchProduct = async (req, res) => {
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
};

const getCollection = async (req, res) => {
    try {
        const result = await getCollections();
        res.send(result);
    } catch (error) {
        console.log(`Error occured while fetching data from the database ${error}`);
        res.status(505).json({ status: "FAILED", "message": "Internal server error" })
    }
}

const getSingleProduct = async (req, res) => {
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
};

const customerHelp = (req, res) => {
    const { ques } = req.body;
    console.log(ques);
    res.json({ "STATUS": "SUCCESS", "message": "Send" })
};

const getProducts = async (req, res) => {
    try {
        const { page, category, brand, minPrice, maxPrice, rating    } = req.query;
        const queryData = {};
        if (!page)
            return res.status(400).json({
                status: false,
                message: 'Page number is missing',
                error: {
                    code: '[PAGE_REQUIRED]',
                    details: null
                }
            });

        let currentPage = parseInt(page);

        if (!(Number.isInteger(currentPage)))
            return res.status(400).json({
                status: false,
                message: 'Invalid page number',
                error: {
                    code: '[INVALID_PAGE]',
                    details: null
                }
            });

        let limit = 6;
        let offset = Math.max(1, (currentPage - 1) * limit);

        if(category) queryData.category = category;
        if(brand) queryData.brand = brand;
        if(minPrice || maxPrice){
            queryData.salePrice = {};
            if(minPrice) queryData.salePrice.$gte = Number(minPrice);
            if(maxPrice) queryData.salePrice.$lte = Number(maxPrice);
        }
        if(rating) queryData.rating.$gte = rating;

        const [data, totalDocuments] = await Promise.all([
            productBaseModel.find(queryData).skip(offset).limit(limit),
            productBaseModel.find(queryData).countDocuments()
        ]);

        const totalPage = Math.ceil(totalDocuments / limit);

        res.json({
            status: true,
            data,
            pagination: {
                requestedPage: currentPage,
                nextPage: currentPage < totalPage ? currentPage + 1 : null,
                totalPage,
                limit,
                totalProducts: totalDocuments,
            }
        })

    } catch (error) {
        console.log(`[GET_PRODUCTS_ERROR] ${error}`);
        res.status(505).json({
            status: false,
            message: 'Internal server error',
            error: {
                code: `GET_PRODUCTS_ERROR`,
                details: `Error occure while retrieving products ${error}`
            }
        })
    }
};

const addProductToDB = async (req, res) => {
    try {
        const data = await fs.readFileSync("/home/cvendra/Downloads/smartphones.json", 'utf-8');
        const jsonData = JSON.parse(data);
        const uploadData = await productBaseModel.create(jsonData);
        res.status(201).json({ status: true, message: 'Resource created' });
    } catch (error) {
        console.log(`[ADD_PRODUCT_ERR] ${error}`);
        res.status(505).json({
            status: false,
            message: 'Internal server error',
            error: {
                code: `ADD_PRODUCT_ERR`,
                details: `Error while adding product to database ${error}`
            }
        })
    }
};

module.exports = {
    getHomeData,
    getCollection,
    addProductToUserCart,
    userOrderPlaced,
    removeProductFromUserCart,
    categoryData,
    searchProduct,
    getSingleProduct,
    customerHelp,
    addProductToDB,
    getProducts
}