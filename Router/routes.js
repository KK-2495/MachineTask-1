import express from "express";
import { addUser, deleteUser, mainPage, register, removeUser, updateEmail, updateName, updateNumber, updatePassword, updateUserEmail, updateUserInfo, updateUserName, updateUserNum, updateUserPass, userId } from "../Controller/userController.js";
import { checkId } from "../Middleware/checks.js";

const router = express.Router();

router.get('/mainpage', mainPage);
router.get('/adduser', addUser);
router.post('/adduser', register);
router.get('/removeuser', removeUser);
router.post('/removeuser', deleteUser);
router.get('/updateuser', userId);
// router.get('/updateuserinfo', updateUserInfo);
router.post('/updateuserinfo', checkId,  updateUserInfo);
router.get('/updateusername', updateUserName);
router.post('/updateusername', updateName);
router.get('/updateuseremail', updateUserEmail);
router.post('/updateuseremail', updateEmail);
router.get('/updateuserpass', updateUserPass);
router.post('/updateuserpass', updatePassword);
router.get('/updateusernum', updateUserNum);
router.post('/updateusernum', updateNumber);

router.post('/checkid', checkId);



export default router;