# Blackwell Invest – Copy Trading Landing & Auth System

A responsive web application built with **Next.js**, **TypeScript**, and **SCSS** for the Blackwell Invest Copy Trading platform.  
This project follows the provided design and additional requirements (registration, login, user state, animations, responsiveness).

---

## 🚀 Features

### 🔹 Landing Page Sections
- **Hero Section** – Animated introduction with CTA buttons.
- **Easy Analysis** – Floating card design with motion effects.
- **Trade Like a Pro** – Interactive step-by-step animation (desktop + mobile friendly).
- **How to Link MT4** – Swiper-based instructional slider with arrow indicators.
- **Key Benefits Section** – Three-column responsive card layout.
- **Navigate the App** – Tab-based feature showcase with smooth transitions.
- **Enquire Now** – Contact form with styled select fields.
- **Register & Login Pages** – Fully validated forms with modals and user state management.

---

## 🧰 Tech Stack

| Technology | Description |
|-------------|-------------|
| **Next.js 14+** | Framework for SSR & routing |
| **TypeScript** | Strongly typed JavaScript |
| **SCSS Modules** | Scoped and maintainable styles |
| **Framer Motion** | Smooth animations and transitions |
| **Yup + React Hook Form** | Form validation |
| **Zustand** | Lightweight state management |
| **Swiper** | Responsive slider component |

---

## 🔐 Authentication Flow

1. **Register / Login** uses form validation and `Promise` to simulate async API.
2. User data stored in `store/user.js` (via Zustand).
3. When logged in:
   - Register/Login buttons become **Logout**.
   - User data persists in the session store.
   - Logout clears the user store and shows a success modal.

---

## 📱 Responsive Design

Every section adapts to:
- Desktop (≥ 992px)
- Tablet (768–991px)
- Mobile (≤ 600px)

All layouts verified for text readability, image scaling, and tap-friendly UI.

---

## 💻 Run the Project

### 1. Install dependencies
```bash
npm install

npm run build

npm start

---




## 📝 License & Copyright

© 2025 Alfred Cheah. All rights reserved.

This project and its source code are proprietary and confidential.  
Unauthorized copying, modification, or distribution of this software,  
via any medium, is strictly prohibited without the express permission  
of the author.

For inquiries, please contact [cscheah01@gmail.com].
