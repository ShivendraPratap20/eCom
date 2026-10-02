const bcrypt = require("bcryptjs");
import type { Request, Response, NextFunction } from "express";
const UserModel = require("../db/Models/Users");

type userStruct = {
    username: string,
    userpassword: string,
    name?: string,
    email?: string,
    phone?: number,
    password?: string | undefined,
    confirmPassword?: string,
    gender?: string,
    _id?: string,
    address?: string
}

const login = async (req: Request, res: Response) => {
    try {
        const { username, userpassword }: userStruct = req.body;
        const userData = await UserModel.find({ email: username });
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
        res.status(202).json({ status: "SUCCESS", message: "Login Success", userData: userData[0] });
    } catch (error) {
        console.log(`Login Error ${error}`);
        res.status(500).json({ status: "FAILED", message: "Internal server error" });
    }
};

const register = async (req:Request, res:Response) => {
    const { name, email, phone, password, confirmPassword, gender }: userStruct = req.body;
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

const logout = (req:Request, res:Response) => {
    try {
        console.log(req.cookies.JWT);
        res.clearCookie("JWT");
        console.log("Logout success");
        res.status(200).json({ status: "SUCCESS", message: "Logout" });
    } catch (error) {
        console.log("Error occured while logout " + error);
    }
};

const setAddress = async (req:Request, res:Response) => {
    try {

        const { _id, address } = req.body;
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