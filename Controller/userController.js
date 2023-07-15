import path from "path";

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