// organising the routes in a single file for 3rd file

import express from "express";
import { userLogin, userSignup } from "./03-controller.js";

const router = express.Router();

router.get("/login", userLogin);
router.get("/signup", userSignup);

export default router;
