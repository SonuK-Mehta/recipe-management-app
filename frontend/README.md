# Recipe Management App - Frontend

## Overview
The **Recipe Management App** frontend is built using **Vite + React** with **CSS Modules** for styling. This application provides a seamless experience for users to explore, filter, and add recipes. It connects to the backend API to fetch and manage recipe data.

## Features
- **Home Page**
  - Hero section with a **"Surprise Me"** button to fetch random recipes.
  - "How It Works" section explaining the app functionality.
  - **Category-based Filtering**: Users can filter recipes by Breakfast, Lunch, Dinner, and Snacks.
- **Recipes Page**
  - Displays all recipes stored in the database.
  - **Add New Recipe Form** with proper validation.
  - **Search Bar** (feature under development).
- **Arrange Your Meal**
  - Drag & Drop functionality for meal planning (currently in development).
- **User Authentication & Authorization** (Upcoming Feature)
  - **User Login & Logout** functionality.
  - Secure user authentication integrated with the backend.
  - Role-based access control for managing recipes.
- **Fully Responsive UI**
  - Works smoothly across mobile, tablet, and desktop devices.

## Project Structure
```
frontend/
│-- src/
│   ├── components/        # Reusable components
│   ├── pages/             # Page-level components
│   ├── styles/            # CSS Modules for styling
│   ├── api/               # Axios setup for API calls
│   ├── hooks/             # Custom hooks (if any)
│   ├── App.js             # Main app component
│   ├── main.jsx           # Entry point
│-- public/                # Static assets
│-- .env                   # Environment variables
│-- vite.config.js         # Vite configuration
│-- package.json           # Dependencies & scripts
```

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/your-recipe-app.git
cd frontend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the **frontend** folder and add the following:
```sh
VITE_BACKEND_URL=http://localhost:80800
```
*(Replace `http://localhost:8080` with your actual backend URL if deployed.)*

### 4. Run the Development Server
```sh
npm run dev
```
This will start the app, and you can access it at **`http://localhost:5173`**.

## API Integration
- The frontend communicates with the backend using **Axios**.
- All API requests use the base URL defined in `.env`.
- Ensure the backend is running before making API calls.

## Deployment
The project is fully deployed:
- **Frontend** is deployed on **Vercel**: [View Frontend](https://recipe-management-app-sable.vercel.app/)
- **Backend** is deployed on **Render**: [View Backend](https://dashboard.render.com/web/srv-cv6rp48gph6c73dpd67g)
- 

## License
This project is licensed under the **MIT License**.

---

Enjoy cooking with the **Recipe Management App**! 🍲🔥

## License
This project is licensed under **CC BY-NC-ND 4.0**   
- **No commercial use is allowed.**  
- **This code may not be used in personal projects, resumes, or portfolios.**  
- **For any other use, please contact the author for permission.**  


