import dotenv from "dotenv";
dotenv.config();

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const order = async (req, res) => {
    const { cartItems } = req.body;

    try {
        const line_items = cartItems.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.discountedPrice * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Stripe error:", error); // helpful for debugging
        res.status(500).json({ error: error.message });
    }
};
