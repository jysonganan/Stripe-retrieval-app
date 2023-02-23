import express from 'express';
import cors from 'cors';
import fetch from "node-fetch";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health-check', async (req, res) => {
    console.log("Request Received!");

    const isStripeUp = await fetch('https://api.stripe.com/healthcheck')
        .then((res) => res.statusText);
    console.log(isStripeUp);
    res.send({
        status: isStripeUp
    })
})
app.listen(3000, () => console.log("Server Running!!"))