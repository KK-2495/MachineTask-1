import express from "express";
import { addUser, deleteUser, mainPage, register, removeUser, updateUserInfo, updateUserName, userId } from "../Controller/userController.js";
import { checkId } from "../Middleware/checks.js";

const router = express.Router();

router.get('/mainpage', mainPage);
router.get('/adduser', addUser);
router.post('/adduser', register);
router.get('/removeuser', removeUser);
router.post('/removeuser', deleteUser);
router.get('/updateuser', userId);
router.get('/updateuserinfo', updateUserInfo);
router.post('/updateuserinfo', checkId,  updateUserInfo);
router.get('/updateusername',updateUserName);

router.get('/checkid', checkId);



export default router;