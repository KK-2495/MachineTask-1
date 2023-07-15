import express from "express";
import { addUser, mainPage } from "../Controller/userController.js";

const router = express.Router();

router.get('/mainpage', mainPage);
router.get('/adduser', addUser);

export default router;