import React from 'react';

const About = () => {
    return (
        <div className="about-page p-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-8">Welcome to our company. Here is our journey so far:</p>
            <div className="history-line space-y-8">
                <div className="history-event">
                    <h2 className="text-2xl font-semibold">2020</h2>
                    <p className="text-base">Company founded.</p>
                </div>
                <div className="history-event">
                    <h2 className="text-2xl font-semibold">2021</h2>
                    <p className="text-base">Launched our first product.</p>
                </div>
                <div className="history-event">
                    <h2 className="text-2xl font-semibold">2022</h2>
                    <p className="text-base">Expanded to international markets.</p>
                </div>
                <div className="history-event">
                    <h2 className="text-2xl font-semibold">2023</h2>
                    <p className="text-base">Reached 1 million users.</p>
                </div>
            </div>
        </div>
    );
};

export default About;