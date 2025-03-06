import React, { useEffect, useRef } from 'react';

const TimerWithRef = ({ initialTime }) => {
    const timeLeft = useRef(initialTime); // Используем ref для хранения времени
    const intervalId = useRef(null); // Ref для хранения ID интервала

    useEffect(() => {
        timeLeft.current = initialTime; // Инициализируем начальное время

        intervalId.current = setInterval(() => {
            if (timeLeft.current > 0) {
                timeLeft.current -= 1;
                console.log(`Time left: ${timeLeft.current}`); // Логируем время в консоль
            } else {
                clearInterval(intervalId.current); // Останавливаем таймер
            }
        }, 1000);

        // Очистка интервала при размонтировании
        return () => clearInterval(intervalId.current);
    }, [initialTime]);

    return (
        <div>
            <h1>Timer with useRef: {timeLeft.current} seconds left</h1>
        </div>
    );
};

export default function App() {
    return <TimerWithRef initialTime={10} />;
}
