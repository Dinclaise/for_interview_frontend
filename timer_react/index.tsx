import React, { useEffect, useRef, useState } from 'react';

const TimerWithIncrease: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<number>(5);
    const intervalRef = useRef<any | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    return 0;
                }

                return prevTime - 1;
            });
        }, 1000);

        // Очистка интервала при размонтировании
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const increaseTime = (amount: number) => {
        setTimeLeft(prevTime => (prevTime > 0 ? prevTime + amount : prevTime));
    };

    return (
        <div>
            <h1>
                {timeLeft > 0 ? `Осталось времени: ${timeLeft} сек` : 'Время вышло!'}
            </h1>
            <button onClick={() => increaseTime(10)} disabled={timeLeft === 0}>
                Увеличить время на 10 секунд
            </button>
        </div>
    );
};

export default function App() {
    return (
        <div className='App'>
            <TimerWithIncrease />
        </div>
    );
}

// Log to console
console.log('Hello console');
