# 🍽️ Recipe Management API

This is a **Node.js + Express** backend for a **Recipe Management Application**. It provides RESTful API endpoints for **creating, retrieving, updating, deleting, and searching recipes** stored in a **MongoDB Atlas** database.

---

## 🚀 Features
- **CRUD operations** for recipes
- **Search recipes** by title
- **Filter recipes** by category
- **Error handling middleware**
- **Environment-based configuration**
- **MongoDB Atlas cloud database connection**
- **Deployed on Render** and **connected with a frontend deployed on Vercel**

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/SonuK-Mehta/recipe-management-app.git
cd backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=your_mongodb_atlas_uri
PORT=8080
```
**Optional:** If `8080` is unavailable, the app will fall back to `8000`.

### 4️⃣ Run the Server
```bash
npm start  # Runs in production mode
```
OR (for development with nodemon):
```bash
npm run server
```
The backend will run on **`http://localhost:8080`** (or `8000` if `8080` is unavailable).

---

## 🌍 Deployment
- **Backend** is deployed on **Render**
- **Frontend** is deployed on **Vercel**
- **Live API URL:** `https://recipe-management-app-tz5r.onrender.com`
- **Frontend URL:** `https://recipe-management-app-sable.vercel.app/`

---

## 📌 API Endpoints

All routes are prefixed with: **`/api/v1/recipes/`**

### 📍 Create a Recipe
```http
POST /api/v1/recipes/create-recipe
```
- **Description:** Adds a new recipe to the database.
- **Request Body:** `{ title, ingredients, instructions, category }`
- **Response:** Newly created recipe.

### 📍 Get All Recipes
```http
GET /api/v1/recipes/get-recipe
```
- **Description:** Fetches all recipes.
- **Response:** Array of recipe objects.

### 📍 Get a Single Recipe by ID
```http
GET /api/v1/recipes/recipe/:id
```
- **Description:** Fetches a specific recipe by its ID.
- **Response:** Recipe object.

### 📍 Update a Recipe
```http
PUT /api/v1/recipes/update-recipe/:id
```
- **Description:** Updates an existing recipe.
- **Request Body:** `{ title, ingredients, instructions, category }`
- **Response:** Updated recipe object.

### 📍 Delete a Recipe
```http
DELETE /api/v1/recipes/delete-recipe/:id
```
- **Description:** Deletes a recipe by ID.
- **Response:** Success message.

### 📍 Search Recipes by Title
```http
GET /api/v1/recipes/search/:query
```
- **Description:** Searches recipes by their title.
- **Response:** Matching recipes.

### 📍 Get Recipes by Category
```http
GET /api/v1/recipes/category/:category
```
- **Description:** Fetches recipes that belong to a specific category.
- **Response:** Array of recipes in that category.

---

## 📦 Project Structure
```
📂 your-repo
├── 📂 config        # Database configuration
├── 📂 controllers   # Business logic for routes
├── 📂 middleware    # Error handling middleware
├── 📂 models        # Mongoose schemas
├── 📂 routes        # Recipe API routes
├── 📜 server.js     # Main entry point
├── 📜 .env          # Environment variables
├── 📜 package.json  # Dependencies & scripts
```

---

## 🛠️ Technologies Used
- **Node.js** & **Express.js** - Backend framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **Dotenv** - Manage environment variables
- **Nodemon** - Development server (optional)
- **Render** - Backend deployment
- **Vercel** - Frontend deployment

---

## 👨‍💻 Future Enhancements
- 🔒 **Implement Authentication** (JWT-based login/logout)
- 📊 **Pagination & Sorting** for recipes

---

## 🤝 Contributing
1. **Fork** the repository.
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Make changes** and **commit** (`git commit -m 'Added feature X'`).
4. **Push** to GitHub (`git push origin feature-branch`).
5. **Open a Pull Request** 🚀.

---

### 🎉 Happy Coding & Bon Appétit! 🍜

