const Express = require("express");
const router = Express.Router();
const {   getHomeData, getCollection, addProductToUserCart, userOrderPlaced, removeProductFromUserCart, categoryData, searchProduct, getSingleProduct, customerHelp } = require("../controller/products.controller");

router.get("/hmdt",getHomeData);
router.post("/addProduct",addProductToUserCart);
router.post("/orders",userOrderPlaced);
router.delete("/removeProduct",removeProductFromUserCart);
router.get("/categoryDt/:category", categoryData);
router.get("/search",searchProduct);
router.get("/getCollections",getCollection);
router.get("/singlePdt/", getSingleProduct);
router.post("/help", customerHelp);

module.exports = {
    productsRouter : router
}