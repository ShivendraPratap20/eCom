const Express = require("express");
const router = Express.Router();
const {   getHomeData, getCollection, addProductToUserCart, userOrderPlaced, removeProductFromUserCart, categoryData, searchProduct, getSingleProduct, customerHelp, addProductToDB, getProducts } = require("../controller/products.controller");

router.get("/hmdt",getHomeData);
router.post("/addProduct",addProductToUserCart);
router.post("/orders",userOrderPlaced);
router.delete("/removeProduct",removeProductFromUserCart);
router.get("/categoryDt/:category", categoryData);
router.get("/search",searchProduct);
router.get("/getCollections",getCollection);
router.get("/singlePdt/", getSingleProduct);
router.post("/help", customerHelp);
router.get("/api/addProduct", addProductToDB);
router.get("/api/getProducts", getProducts)

module.exports = {
    productsRouter : router
}