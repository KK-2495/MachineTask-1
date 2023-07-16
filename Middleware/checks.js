import Users from "../Models/user.js";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

export const checkId = async (req, res, next) => {
    try {
        const { id } = req.body;
        const response = await Users.findOne({ _id: id }).exec();
        if (!response) return res.json({ "status": 400, "message": "ID not found." });

        const tempData = {
            userId: response._id
        };

        const filePath = path.join(__dirname, "/TempUserData/tempObject.json");
        fs.writeFile(filePath, JSON.stringify(tempData), (err) => {
            if (err) {
                return res.send(err);
            } else {
                console.log("File saved.");
                // return res.send("complete");
            }
        });

        next();
    } catch (error) {
        return res.send(error);
    }
};
