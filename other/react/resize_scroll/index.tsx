import React, { useState, useEffect } from 'react';

// Утилита для throttle
const throttle = (func, delay) => {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
};

const ScrollResizeTracker = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Обработчик resize с throttle
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    // Обработчик scroll с throttle
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        // Создаем throttled версии функций
        const throttledResize = throttle(handleResize, 150); // Ограничение до 1 раза в 150 мс
        const throttledScroll = throttle(handleScroll, 150); // Ограничение до 1 раза в 150 мс

        // Подписка на события
        window.addEventListener('resize', throttledResize);
        window.addEventListener('scroll', throttledScroll);

        // Очистка при размонтировании
        return () => {
            window.removeEventListener('resize', throttledResize);
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);

    return (
        <div>
            <p>Scroll Position: {scrollPosition}px</p>
            <p>Window Size: {windowSize.width}x{windowSize.height}</p>
        </div>
    );
};

export default ScrollResizeTracker;
