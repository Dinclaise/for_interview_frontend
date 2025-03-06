import React, { useState, useEffect } from 'react';

const App = () => {
    // Состояния для хранения данных
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Функция для выполнения асинхронных запросов
        const fetchData = async () => {
            try {
                // Выполняем два параллельных запроса с помощью Promise.all
                const [result1, result2] = await Promise.all([
                    fetch('https://api.example.com/data1').then((res) => res.json()),
                    fetch('https://api.example.com/data2').then((res) => res.json()),
                ]);

                // Сохраняем результаты в состояния
                setData1(result1);
                setData2(result2);
            } catch (err) {
                // Обрабатываем ошибки
                setError(err.message);
            } finally {
                // Завершаем загрузку
                setLoading(false);
            }
        };

        // Вызываем функцию
        fetchData();
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Data 1:</h1>
            <pre>{JSON.stringify(data1, null, 2)}</pre>

            <h1>Data 2:</h1>
            <pre>{JSON.stringify(data2, null, 2)}</pre>
        </div>
    );
};

export default App;
