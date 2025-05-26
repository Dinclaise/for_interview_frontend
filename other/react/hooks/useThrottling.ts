const useThrottling = (fn, delay) => {
    const lastCall = useRef(0);
    const timer = useRef(null);

    const throttled = useRef(() => {
        const now = Date.now();
        if (now - lastCall.current >= delay) {
            callback(...arguments);
            lastCall.current = now;
        } else {
            // Устанавливаем таймер для выполнения функции в следующий доступный промежуток
            if (timer.current === null) {
                timer.current = setTimeout(() => {
                    callback(...arguments);
                    lastCall.current = Date.now();
                    timer.current = null;
                }, delay);
            }
        }
    });

    useEffect(() => {
        return () => {
            if (timer.current !== null) {
                clearTimeout(timer.current);
                timer.current = null;
            }
        };
    }, []);

    return throttled.current;
}
