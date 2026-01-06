# 🛒 Shopwise

**AI-Enhanced E-Commerce Platform**

Shopwise is a full-stack e-commerce platform built to demonstrate real-world backend engineering, secure payment workflows, and practical AI integration. The project focuses on scalability, clean architecture, and testability rather than demo-only features.

---

## 🚀 Key Highlights (Read This First)

* Secure **Stripe payment integration** with webhook verification
* **Semantic product search** using embeddings
* **Content-based product recommendations**
* **AI shopping assistant** with database-grounded responses
* **Demand prediction** for inventory planning
* **Automated backend testing** (auth, payments, orders)
* Built using **Bun** for fast development workflows

---

## ✨ Core Features

### User

* JWT-based authentication & authorization
* Product browsing with filters and search
* Semantic search with intent understanding
* Cart & wishlist
* Secure checkout with Stripe
* Order tracking & history
* Personalized product recommendations
* AI-powered shopping assistant

### Admin

* Product & inventory management
* Order lifecycle management
* Sales analytics
* Demand prediction & low-stock alerts

---

## 🤖 AI Features (Practical, Explainable)

* **Product Recommendations**
  Content-based similarity using product metadata and user behavior

* **Smart Search**
  Embedding-based semantic search with keyword fallback

* **AI Shopping Assistant**
  Context-aware chatbot restricted to product and order data

* **Demand Prediction**
  Simple statistical forecasting using historical sales data

> No heavy data science — focus is on applied, production-usable AI.

---

## 🏗 Architecture

```
Frontend (Next.js)
        ↓
Backend API (Bun + Express)
        ↓
MongoDB • Redis • Stripe
        ↓
AI Service (Search, Recommendations, Chatbot, Forecasting)
```

**Architecture decisions:**

* Modular backend structure
* Separate AI service for clean isolation
* Redis caching for performance
* Webhook-driven payment confirmation
* Testable, API-first design

---

## 🧰 Tech Stack

**Frontend**

* Next.js, React, TypeScript, Tailwind CSS

**Backend**

* Bun (runtime & package manager)
* Express.js
* MongoDB (Mongoose)
* Redis
* Stripe API

**AI / ML**

* Text embeddings
* Similarity scoring
* Statistical forecasting

**Testing**

* Jest
* Supertest
* MongoDB Memory Server
* Mocked Stripe APIs

**DevOps**

* Docker
* GitHub Actions (CI/CD)

---

## 🗂 Repository Structure

```
shopwise/
├── fe/        # Frontend (Next.js)
├── be/        # Backend (Bun + Express)
├── ai/        # AI services
├── tests/     # Backend integration tests
├── docker/
└── README.md
```

---

## 🧪 Testing Strategy

Focused on **business-critical paths**, not superficial coverage.

Covered:

* Authentication & authorization
* Stripe payment workflows & webhooks
* Order creation & inventory updates
* AI service fallbacks and failures

Run tests:

```bash
bun test
```

---

## 💳 Payments

* Stripe Checkout integration
* Webhook signature verification
* Atomic order & stock updates
* Idempotent webhook handling

---

## 🧠 Engineering Takeaways

* Designing production-grade payment systems
* Building AI features with strict boundaries
* Writing meaningful backend integration tests
* Structuring scalable full-stack applications
* Using Bun for faster iteration

---

## 📄 License

MIT

---

## 👤 Author

**Joy Sengupta**
Full-Stack Developer

---

## 📌 Resume-Optimized Summary

> Built **Shopwise**, a production-ready full-stack e-commerce platform using Bun, featuring secure Stripe payments, semantic search, AI-driven product recommendations, demand forecasting, and automated backend testing with Jest and Supertest.

