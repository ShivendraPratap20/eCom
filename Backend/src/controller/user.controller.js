const bcrypt = require("bcryptjs");
const UserModel = require("../db/Models/Users");

const login = async (req, res) => {
    try {
        const { username, userpassword } = req.body;
        const userData = await UserModel.find({ email: username });
        console.log(username);
        if (userData[0] == undefined) {
            res.status(404).json({ status: "FAILED", message: "User doesn't exists" });
            return;
        }
        const isMatch = await bcrypt.compare(userpassword, userData[0].password);
        if (!isMatch) {
            res.status(404).json({ status: "FAILED", message: "Password Incorrect" });
            return;
        }
        const token = await userData[0].generateToken();
        console.log(token);
        res.cookie("JWT", token, {
            secure: true,
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        console.log(req.cookies.JWT);
        res.status(202).json({ status: "SUCCESS", message: "Login Success", userData: userData[0] });
    } catch (error) {
        console.log(`Login Error ${error}`);
        res.status(500).json({ status: "FAILED", message: "Internal server error" });
    }
};

const register = async (req, res) => {
    const { name, email, phone, password, confirmPassword, gender } = req.body;
    try {
        const existsData = await UserModel.find({ email: email });
        if (existsData[0] != undefined) {
            res.status(409).json({ status: "FAILED", message: "User already exixts" });
            return;
        }
        if (password !== confirmPassword || password.length < 8) {
            res.status(401).json({ status: "FAILED", message: "Check your password or confirm password" });
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
};

const logout = (req, res) => {
    try {
        console.log(req.cookies.JWT);
        res.clearCookie("JWT");
        console.log("Logout success");
        res.status(200).json({ status: "SUCCESS", message: "Logout" });
    } catch (error) {
        console.log("Error occured while logout " + error);
    }
};

const setAddress = async (req, res) => {
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

        res.json({ status: "SUCCESS", message: "Address updated", user: updatedUser });
    } catch (error) {
        console.error("Error updating address:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    login,
    register,
    logout,
    setAddress
}