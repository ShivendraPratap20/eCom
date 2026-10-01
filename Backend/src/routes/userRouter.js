const Express = require("express");
const router = Express.Router();
const { login, register, logout, setAddress } = require("../controller/user.controller");


router.post("/login", login);
router.post("/setAddress", setAddress);
router.post("/register", register);
router.get("/logout", logout);

module.exports = {
    userRouter : router
};