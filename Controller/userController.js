import path from "path";
import Users from "../Models/user.js";
import fs from "fs";

const __dirname = path.resolve();

export const mainPage = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/mainPage.html')
    } catch (error) {
        return res.send(error);
    }
}

export const addUser = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/adduser.html')
    } catch (error) {
        return res.send(error);
    }
}

export const removeUser = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/deleteuser.html')
    } catch (error) {
        return res.send(error);
    }
}

export const register = async (req,res) =>{
    try {
        const {name, email, password, number} = req.body;

        const response = await Users.find({email}).exec();

        if(response.length) return res.send("Your are already registered.");

        const user = new Users ({
            name,
            email,
            password,
            number
        })
        await user.save();
        return res.send("Registration Successful");
    } catch (error) {
        return res.send(error);
    }
}

export const deleteUser = async (req,res) =>{
    try {
        const{email} = req.body;
        const response  = await Users.findOneAndDelete({email}).exec();
        console.log(response);
        return res.send("User Removed successfully");
    } catch (error) {
        return res.send(error);
    }
}


export const userId = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/enterid.html')
    } catch (error) {
        return res.send(error);
    }
}

export const updateUserInfo = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/updateuser.html')
    } catch (error) {
        return res.send(error);
    }
}

export const updateUserName = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/name.html')
    } catch (error) {
        return res.send(error);
    }
}

export const updateName = async (req, res) => {
    try {
        const { updatedName } = req.body;
        const filePath = path.join(__dirname, "/TempUserData/tempObject.json");

        fs.readFile(filePath, "utf8", async (err, data) => {
            if (err) {
                return res.send(err);
            }
            const userId = JSON.parse(data).userId;
            
            const response = await Users.findByIdAndUpdate({_id:userId},{name: updatedName}).exec();
            return res.send("Name updated Successfully");
        });


    } catch (error) {
        return res.send(error);
    }
};

export const updateUserEmail = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/email.html')
    } catch (error) {
        return res.send(error);
    }
}

export const updateEmail = async (req, res) => {
    try {
        const { updatedEmail } = req.body;
        const filePath = path.join(__dirname, "/TempUserData/tempObject.json");

        fs.readFile(filePath, "utf8", async (err, data) => {
            if (err) {
                return res.send(err);
            }
            const userId = JSON.parse(data).userId;
            
            const response = await Users.findByIdAndUpdate({_id:userId},{name: updatedEmail}).exec();
            return res.send("Name updated Successfully");
        });


    } catch (error) {
        return res.send(error);
    }
};


export const updateUserPass = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/password.html')
    } catch (error) {
        return res.send(error);
    }
}

export const updatePassword = async (req, res) => {
    try {
        const { updatedPass } = req.body;
        const filePath = path.join(__dirname, "/TempUserData/tempObject.json");

        fs.readFile(filePath, "utf8", async (err, data) => {
            if (err) {
                return res.send(err);
            }
            const userId = JSON.parse(data).userId;
            
            const response = await Users.findByIdAndUpdate({_id:userId},{name: updatedPass}).exec();
            return res.send("Name updated Successfully");
        });


    } catch (error) {
        return res.send(error);
    }
};

export const updateUserNum = (req,res) =>{
    try {
        res.sendFile(__dirname + '/public/html/number.html')
    } catch (error) {
        return res.send(error);
    }
}

export const updateNumber = async (req, res) => {
    try {
        const { updatedNum } = req.body;
        const filePath = path.join(__dirname, "/TempUserData/tempObject.json");

        fs.readFile(filePath, "utf8", async (err, data) => {
            if (err) {
                return res.send(err);
            }
            const userId = JSON.parse(data).userId;
            
            const response = await Users.findByIdAndUpdate({_id:userId},{name: updatedNum}).exec();
            return res.send("Name updated Successfully");
        });


    } catch (error) {
        return res.send(error);
    }
};
