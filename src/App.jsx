import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 dark:text-gray-100">
      <header className="p-4 bg-gray-100 dark:bg-gray-800">
        <nav className="flex justify-center gap-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
        </nav>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
