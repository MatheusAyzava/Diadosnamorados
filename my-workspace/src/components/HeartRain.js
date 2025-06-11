import React, { useEffect, useState } from 'react';
import './HeartRain.css'; // Ensure to create this CSS file for styling

const HeartRain = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const heart = {
                id: Date.now(),
                left: Math.random() * 100,
                animationDuration: Math.random() * 2 + 3 // Random duration between 3s and 5s
            };
            setHearts((prevHearts) => [...prevHearts, heart]);
        }, 500); // New heart every 500ms

        return () => clearInterval(interval);
    }, []);

    const removeHeart = (id) => {
        setHearts((prevHearts) => prevHearts.filter(heart => heart.id !== id));
    };

    return (
        <div className="heart-rain">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="heart"
                    style={{
                        left: `${heart.left}vw`,
                        animationDuration: `${heart.animationDuration}s`
                    }}
                    onAnimationEnd={() => removeHeart(heart.id)}
                >
                    ❤️
                </div>
            ))}
        </div>
    );
};

export default HeartRain;