import express from "express";
import { register,login,getMyProfile  } from "../controllers/auth.js";


const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/me" , getMyProfile);



export default router