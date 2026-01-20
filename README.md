# Nature Nook Backend 💻💳

This is the **backend server** for [Nature Nook](https://github.com/umairr07/Nature-Nook) – a modern e-commerce platform for high-quality daily essentials.  
This service primarily handles **payment processing using Stripe**.

---

## 💳 Payment Integration (Stripe)

This backend is integrated with **Stripe** to enable secure and scalable payment functionality:

- Supports **Stripe Checkout** sessions.
- Handles **payment intent creation** and **webhooks** for real-time transaction updates.
- Securely manages Stripe keys through environment variables.

---

## 🚀 Tech Stack

- **Node.js & Express**: RESTful API development.
- **Stripe SDK**: Payment processing and checkout sessions.
- **CORS**: Enables secure cross-origin requests from the frontend.
- **dotenv**: Manages sensitive credentials via environment variables.

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nature-nook-backend.git
cd nature-nook-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration
Create a .env file in the root directory and add the following:

```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
CLIENT_URL=http://localhost:5173  # or your deployed frontend URL
PORT=5000
```

### 4. Start the server

```bash
npm start
```
The server will start on http://localhost:5000 by default.

## 🧩 Deployment Notes
- Ensure your production environment also sets the correct Stripe keys.
- Use HTTPS in production to ensure Stripe webhooks function correctly.
- Stripe webhooks must be publicly accessible — use tools like ngrok during development if needed.

### 📬 Contact

For any inquiries or feedback, feel free to reach out via the contact form or email at:

📧 **imumairshaikh07@gmail.com**




