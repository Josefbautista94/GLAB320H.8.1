# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# GLAB320H.8.1

# 🪙 CryptoPrices – React Router App

A simple multi-page React application built with **Vite** and **React Router** to display cryptocurrency exchange rates using the [CoinAPI](https://www.coinapi.io/) service.

---

## 📚 Learning Objectives

- Implement client-side routing using React Router
- Fetch and display data from an external API
- Use `useParams`, `useEffect`, and dynamic routing
- Manage environment variables with `.env` files in Vite

---

## 🚀 Project Setup

### 1. Clone the Repo


git clone https://github.com/yourusername/cryptoprices.git
cd cryptoprices


### 2. Install Dependencies

npm install

### 3. Set Up Environment Variables
Create a .env file in the root directory and add your CoinAPI key:

env

VITE_COINAPI_KEY=your_actual_api_key_here
⚠️ You can get a free API key at https://www.coinapi.io

### 4. Start the Dev Server

npm run dev
Visit http://localhost:5173 to see it in action.

## 🔗 Features
Dynamic routing with react-router-dom

Real-time price fetch via CoinAPI

Responsive navigation bar

Clean loading state and error handling

## 🛡️ .gitignore (Important)
Make sure your .env file is not committed to Git:


# .gitignore
.env

## 📌 Tech Stack
React

Vite

React Router DOM

CoinAPI



## 👨‍💻 Author
Jose Francisco Bautista
Passionate about building apps that blend tech and learning.

