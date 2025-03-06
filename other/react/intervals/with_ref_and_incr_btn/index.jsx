import React, { useEffect, useRef, useState } from 'react';

const TimerWithRef = ({ initialTime }) => {
    const timeLeft = useRef(initialTime); // Используем ref для хранения времени
    const intervalId = useRef(null); // Ref для хранения ID интервала
    const [displayTime, setDisplayTime] = useState(initialTime); // Для отображения времени

    useEffect(() => {
        timeLeft.current = initialTime; // Инициализируем начальное время
        setDisplayTime(initialTime); // Обновляем отображаемое время

        intervalId.current = setInterval(() => {
            if (timeLeft.current > 0) {
                timeLeft.current -= 1;
                setDisplayTime(timeLeft.current); // Обновляем отображаемое время
            } else {
                clearInterval(intervalId.current); // Останавливаем таймер
            }
        }, 1000);

        // Очистка интервала при размонтировании
        return () => clearInterval(intervalId.current);
    }, [initialTime]);

    const increaseByTwo = () => {
        timeLeft.current += 2; // Увеличиваем время на +2
        setDisplayTime(timeLeft.current); // Обновляем отображаемое время
    };

    return (
        <div>
            <h1>Timer with useRef: {displayTime} seconds left</h1>
            <button onClick={increaseByTwo}>Increase by +2</button>
        </div>
    );
};

export default function App() {
    return <TimerWithRef initialTime={10} />;
}



/// combined version
const TimerWithRef = ({ initialTime }) => {
    const timeLeft = useRef(initialTime); // Используем ref для хранения времени
    const [displayTime, setDisplayTime] = useState(initialTime); // Для отображения времени
    const intervalId = useRef(null); // Ref для хранения ID интервала

    useEffect(() => {
        timeLeft.current = initialTime; // Обновляем значение ref
        setDisplayTime(initialTime); // Обновляем отображаемое время

        intervalId.current = setInterval(() => {
            if (timeLeft.current > 0) {
                timeLeft.current -= 1;
                setDisplayTime(timeLeft.current); // Обновляем отображаемое время
            } else {
                clearInterval(intervalId.current); // Останавливаем таймер
            }
        }, 1000);

        // Очистка интервала при размонтировании
        return () => clearInterval(intervalId.current);
    }, [initialTime]);

    const increaseByTwo = () => {
        timeLeft.current += 2; // Увеличиваем время на +2
        setDisplayTime(timeLeft.current); // Обновляем отображаемое время
    };

    return (
        <div>
            <h1>Timer with useRef: {displayTime} seconds left</h1>
            <button onClick={increaseByTwo}>Increase by +2</button>
        </div>
    );
};

export default function App() {
    return <TimerWithRef initialTime={10} />;
}
