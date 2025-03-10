import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-bounce">Welcome to Tailkit</h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in">Your one-stop solution for modern web design</p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out animate-pulse">
                Get Started
            </button>
        </div>
    );
};

export default Home;