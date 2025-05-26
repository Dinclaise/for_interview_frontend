const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState();
    const timerId = useRef(null);

    useEffect(() => {
        if (timerId.current) {
            clearTimeout(timerId.current)
        }

        timerId.current = setTimeout(() => {
            setDebouncedValue(value);
        }, limit)

        return () => {
            if (timerId.current) {
                clearTimeout(timerId.current)
            }
        }
    }, [value, limit]);

    return debouncedValue;
}
