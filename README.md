<p align="center">
  <img src="./src/assets/logoDark.png" alt="Rent Wheels Logo" width="150"/>
</p>

[🌐 Live Site](https://stirring-gingersnap-70f67e.netlify.app/)

**Rent Wheels** is a modern, responsive car rental web application that allows users to browse, search, and book cars efficiently.  
It provides a smooth user experience with a clean UI, advanced filtering, and robust backend functionality.

---

## 🔹 Main Features

- **Browse and Search Cars:** Easily browse cars, filter by categories (Sedan, SUV, Electric, Luxury, Hatchback), and search by name.
- **Sorting & Pagination:** Sort cars by price (low → high / high → low) or posting date (newest/oldest) and load more cars seamlessly.
- **User Authentication:** Secure login and registration system with Firebase Authentication.
- **Real-Time Notifications:** Uses React Toastify for elegant toast alerts and SweetAlert2 for confirmation dialogs.
- **Interactive Contact Page:** Includes contact form, office map, working hours, and professional social media links.
- **Responsive & Modern UI:** Fully mobile-friendly, built with Tailwind CSS, Lottie React animations, and Framer Motion.
- **Backend Integration:** Node.js, Express, and MongoDB for efficient car management, search, and booking functionality.

---

## 🛠 Tech Stack

**Frontend:**  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![Framer Motion](https://img.shields.io/badge/Framer_Motion-000000?style=for-the-badge&logo=framer&logoColor=white)  
![Lottie React](https://img.shields.io/badge/Lottie_React-007ACC?style=for-the-badge&logo=react&logoColor=white)  
![React Toastify](https://img.shields.io/badge/React_Toastify-FFDD57?style=for-the-badge&logo=react&logoColor=black)  
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF5F6D?style=for-the-badge&logo=sweetalert&logoColor=white)

**Backend:**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**Deployment:**  
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)  
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

---

## ⚡ Getting Started

### 🧩 Clone the Repositories

**Frontend:**

```bash
git clone https://github.com/RaiyanSohel-byte/rent-wheels-client.git
Backend:

git clone https://github.com/RaiyanSohel-byte/rent-wheels-server.git
📦 Install Dependencies


# Frontend
cd rent-wheels-client
npm install

# Backend
cd ../rent-wheels-server
npm install
🚀 Start Development
bash

# Frontend
npm run dev

# Backend
npm run start
```

## 📂 Folder Structure

### 🖥 Frontend

```
src/
├── components/ → Reusable UI components (CarCard, Loader, EmptyList, etc.)
├── hooks/ → Custom hooks (useAxios, useAuth, useSearch)
├── pages/ → Application pages (BrowseCars, Contact, CarDetails, etc.)
├── assets/ → Images, logos, and Lottie animation files

layouts/
├── MainLayout.jsx → Main layout component

main.jsx → Root React component

routes/
├── PrivateRoute/
│ ├── PrivateRoute.jsx → Private route handler
├── router.jsx → All routes defined here

contexts/
├── authContext/ → Authentication Context API
├── SearchContext/ → Search feature Context API
├── ThemeContext/ → Theme toggle Context API
```

## 🛠️ Backend:

**Tech Stack:** Node.js, Express.js, MongoDB Atlas, Firebase Admin SDK

routes/ → API endpoints (cars, bookings, etc.)
index.js → Main Express server setup and middleware configuration
.env → Environment variables (DB credentials, Firebase keys)

- Uses **MongoDB Atlas** for cloud database storage
- Handles **authentication** with Firebase Admin SDK
- Provides **secure RESTful APIs** for cars and bookings
- Deployed on **Vercel** for scalability and performance

---

## 🚗 API Overview

The backend provides RESTful API endpoints for managing cars and bookings.
All secured routes use Firebase Authentication for authorization.

### 🔹 Cars Endpoints

| Method | Endpoint      | Description                            | Protected |
| ------ | ------------- | -------------------------------------- | --------- |
| GET    | `/cars`       | Get all cars or filter by provider     | ❌        |
| GET    | `/cars/:id`   | Get car details by ID                  | ✅        |
| POST   | `/cars`       | Add a new car                          | ✅        |
| PATCH  | `/cars/:id`   | Update car information                 | ✅        |
| DELETE | `/cars/:id`   | Delete a car                           | ✅        |
| GET    | `/latestCars` | Fetch the latest 6 added cars          | ❌        |
| GET    | `/search`     | Search cars by name (case-insensitive) | ❌        |

### 🔹 Bookings Endpoints

| Method | Endpoint        | Description                         | Protected |
| ------ | --------------- | ----------------------------------- | --------- |
| GET    | `/bookings`     | Get all bookings for a user (email) | ✅        |
| POST   | `/bookings`     | Create a new booking                | ✅        |
| PATCH  | `/bookings/:id` | Update booking details              | ✅        |
| DELETE | `/bookings/:id` | Delete a booking                    | ✅        |

---

✅ **Notes:**

- Protected routes (`✅`) require a valid Firebase ID token in the header:
  Authorization: Bearer <token>

- The backend is deployed on **Vercel**, connected to **MongoDB Atlas**.

---

📬 Contact
Email: afnan19262@gmail.com

WhatsApp: +8801790839334

LinkedIn: https://www.linkedin.com/in/raiyan-sohel-5450b71a1/

⭐ If you like this project, don’t forget to star the repository!

```

```
