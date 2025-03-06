import React, { useState, useEffect } from 'react';

const TimerWithState = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft === 0) return; // Останавливаем таймер, если время истекло

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        // Очистка интервала при размонтировании или изменении initialTime
        return () => clearInterval(timerId);
    }, [timeLeft]); // Зависимость от timeLeft для обновления интервала

    const increaseByTwo = () => {
        setTimeLeft((prevTime) => prevTime + 2); // Увеличиваем время на +2
    };

    return (
        <div>
            <h1>Timer with useState: {timeLeft} seconds left</h1>
            <button onClick={increaseByTwo}>Increase by +2</button>
        </div>
    );
};

export default function App() {
    return <TimerWithState initialTime={10} />;
}
