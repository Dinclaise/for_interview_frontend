import React, { useState, useRef } from "react";

export const Test = () => {
    const [counter, setCounter] = useState(0);
    const intervalRef = useRef(null); // Для хранения ID интервала

    // Функция для увеличения счетчика
    const handleAdd = () => {
        setCounter((prev) => prev + 1);
    };

    // Функция для уменьшения счетчика
    const handleSub = () => {
        setCounter((prev) => prev - 1);
    };

    // Обработчик нажатия и удержания кнопки "add"
    const handleAddMouseDown = () => {
        handleAdd(); // Увеличиваем счетчик сразу при нажатии
        intervalRef.current = setInterval(() => {
            setCounter((prev) => prev + 1); // Увеличиваем счетчик каждую секунду
        }, 1000);
    };

    // Обработчик нажатия и удержания кнопки "sub"
    const handleSubMouseDown = () => {
        handleSub(); // Уменьшаем счетчик сразу при нажатии
        intervalRef.current = setInterval(() => {
            setCounter((prev) => prev - 1); // Уменьшаем счетчик каждую секунду
        }, 1000);
    };

    // Обработчик отпускания или покидания кнопки
    const handleMouseUpOrLeave = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // Останавливаем интервал
            intervalRef.current = null; // Очищаем ссылку
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
            }}
        >
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <div style={{ display: "flex", gap: 10 }}>
                {/* Кнопка "sub" */}
                <button
                    onMouseDown={handleSubMouseDown}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                >
                    sub
                </button>

                {/* Кнопка "add" */}
                <button
                    onMouseDown={handleAddMouseDown}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                >
                    add
                </button>
            </div>
        </div>
    );
};
