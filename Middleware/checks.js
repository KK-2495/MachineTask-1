import Users from "../Models/user.js";

export const checkId = async (req,res,next) =>{
    try {
        const{id} = req.body;
        const response = await Users.findOne({_id:id}).exec();
        if(!response) return res.send("Check Your Id");
        // return res.send(response);
        next();
    } catch (error) {
        return res.send(error);
    }
}