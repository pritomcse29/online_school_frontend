# React + Vite
🎓 Online School – Frontend
A modern, responsive, and role-based e-learning frontend built using React.js, styled with Tailwind CSS, DaisyUI, and Flowbite. This application consumes a powerful Django REST Framework API to deliver a full-featured online learning experience for students, teachers, and admins — including course enrollment, payment, reporting, and content creation.

🧩 Tech Stack
Layer	Technology
Framework	React.js (Vite-powered)
Styling	Tailwind CSS, DaisyUI, Flowbite
State	React Context API / useReducer / LocalStorage
API	Django REST Framework (JWT-secured)
Auth	JWT (access + refresh token flow)
Payment	SSLCommerz Sandbox Integration
Deployment	Vercel

⚙️ Core Features
🔐 Authentication & Access
Secure JWT-based login/logout

Email verification required before account activation

Role-based conditional routing (Student / Teacher / Admin)

Token storage in memory or localStorage

👨‍🎓 Student Functionality
Browse available courses

Add to cart

Enroll and pay via SSLCommerz Sandbox

View enrolled courses

👨‍🏫 Teacher Functionality
Create subjects and courses

View only own created courses

Monitor sales via:

7-day report

30-day report

🛠️ Admin Functionality
View and manage all orders

Change order status: Confirm / Cancel

Moderate users and platform activity

📁 Folder Structure
online-school-frontend/
├── public/                 # Public assets
├── src/
│   ├── assets/             # Image, icons, etc.
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Page layouts (Dashboard, Auth, etc.)
│   ├── pages/              # Route pages
│   ├── routes/             # Protected / Role-based routing logic
│   ├── services/           # API calls (Axios wrapper)
│   ├── context/            # Auth / Cart / User context
│   ├── hooks/              # Custom React hooks
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── tailwind.config.js      # Tailwind + DaisyUI + Flowbite config
├── .env                    # Environment variables (Vercel-ready)
├── vite.config.js
└── package.json

🔌 Environment Variables
Create a .env file with the following:
API_BASE_URL=https://online-school-backend.vercel.app/api/v1
SSLCOMMERZ_STORE_ID=your_test_store_id
SSLCOMMERZ_PAYMENT_URL=https://sandbox.sslcommerz.com/gwprocess/v4/api.php

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/online-school-frontend.git
cd online-school-frontend
2. Install Dependencies
npm install
3. Run Locally
npm run dev
App runs at: http://localhost:5173

🌐 Deployment
Deployed via Vercel:

🔗 https://online-school-frontend.vercel.app

Make sure .env variables are configured correctly in your Vercel project settings.

📦 UI Libraries Used
Tailwind CSS – Utility-first responsive design

DaisyUI – Themeable UI component library on top of Tailwind

Flowbite – Prebuilt interactive Tailwind components

🔐 JWT Auth Integration
Access token stored in localStorage (or memory)

Refresh token auto-renewal strategy

Protected routes based on role (admin, teacher, student)

Axios interceptors for auth headers

🧾 API Documentation
Backend Swagger Docs:
https://online-school-backend.vercel.app/swagger/

All requests are prefixed with:
API_BASE_URL + /api/v1/
📈 Future Enhancements
✅ Stripe or live SSLCommerz integration


🤝 Contributing
Pull requests and feature improvements are welcome. Please open an issue to discuss before submitting a PR.

🧑‍💻 Author
Pritom Sarkar
📫 pritom.cse.29@gmail.com
🔗 https://github.com/pritomcse29

📄 License
This project is licensed under the MIT License.
