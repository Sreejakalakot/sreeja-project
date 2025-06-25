# 🎬 Movie Watchlist React

A sleek movie watchlist app built with React that lets users search for movies using TMDb API and manage their watchlist and watched movies. It's perfect for movie lovers who want to keep track of what they've seen or plan to watch!

---

## 🚀 Features

- 🔍 Search movies from The Movie Database (TMDb)
- ➕ Add movies to **Watchlist**
- ✅ Move movies to **Watched** or back to **Watchlist**
- ❌ Remove movies from either list
- 📊 View total count of movies
- 💾 Persist data using `localStorage`
- ♻️ Built using React Hooks and Context API
- 🔐 User authentication: Register & Login
- 🔓 Access watchlist only after logging in

---

## 📽️ Demo

https://user-images.githubusercontent.com/76695320/122665382-79ab5980-d1c4-11eb-939e-5d101c140d3d.mp4

---

## 🖼️ Screenshots

> Sample UI from the working app:

![Screenshot 1](https://user-images.githubusercontent.com/76695320/122665199-7fed0600-d1c3-11eb-8f80-9dfa308fdd11.png)
![Screenshot 2](https://user-images.githubusercontent.com/76695320/122665204-85e2e700-d1c3-11eb-8f6b-4d0aef3c4fde.png)
![Screenshot 3](https://user-images.githubusercontent.com/76695320/122665210-8aa79b00-d1c3-11eb-97a6-ab25d4d498e7.png)

*More screenshots in the repo...*

---
---
---

## 🔐 Authentication (Login & Register)

This app supports full authentication:

- 📝 **Register**: Users can create an account
- 🔓 **Login**: Users can log in securely
- 🔄 Watchlist and Watched lists are personalized per user
- 🧾 Auth data is stored securely in **MongoDB** using **JWT tokens**

Backend is built with **Node.js**, **Express**, and **MongoDB**.

---



## 🧪 API Reference

Data is fetched from [The Movie Database (TMDb)](https://www.themoviedb.org/).

```http
GET /search/movie
https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&query=${movieName}
## ⚙️ Project Setup

### Frontend (React)

1. Open terminal and run:

```bash
cd Movie-Watchlist-React
npm install
2.Create a .env file:
REACT_APP_TMDB_KEY=your_tmdb_api_key
3.Start the frontend:
npm start
>>Backend (Node.js + MongoDB)
1.Open a new terminal and run:
cd backend
npm install
2.Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
3.Start the backend:
node server.js
Now both servers are running:

Frontend: http://localhost:3000

Backend: http://localhost:5000


