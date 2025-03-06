import React, { useState, useEffect } from 'react';

const TimerWithState = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft === 0) return; // Останавливаем таймер, если время истекло

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        // Очистка интервала при размонтировании или изменении initialTime
        return () => clearInterval(timerId);
    }, [timeLeft]); // Зависимость от timeLeft для обновления интервала

    return (
        <div>
            <h1>Timer with useState: {timeLeft} seconds left</h1>
        </div>
    );
};

export default function App() {
    return <TimerWithState initialTime={10} />;
}
