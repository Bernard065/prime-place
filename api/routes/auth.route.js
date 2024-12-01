import express from 'express';
import { login, logout, register } from '../controllers/auth.controller.js'; // Import functions

const authRouter = express.Router();

// Define routes and map them to controller functions
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);  

export default authRouter;
