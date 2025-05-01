import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import { router } from "./routes/payment.js";
import cors from "cors";

dotenv.config();
const app = express();

// console.log("Stripe Secret Key in index file:", process.env.STRIPE_SECRET_KEY);


app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://nature-nook.vercel.app"
    ],

    credentials: true
}));

app.use("/api/v1/order", router)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

connectDB();