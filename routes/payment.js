import express from "express";
import { order } from "../controller/payment.js";

export const router = express.Router();

router.post("/checkout", order)


