import dotenv from "dotenv";
dotenv.config();

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const DOMAIN = process.env.BASE_URL || "http://localhost:5173";


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
            success_url: `${DOMAIN}/success`,
            cancel_url: `${DOMAIN}/cancel`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Stripe error:", error); // helpful for debugging
        res.status(500).json({ error: error.message });
    }
};
