import { useState, useEffect } from 'react';

function useQuery<T>(key: string, fetchFn: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const loadData = async () => {
            try {
                setIsLoading(true);
                const result = await fetchFn(); // Выполняем запрос
                if (!signal.aborted) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (!signal.aborted) {
                    setError(err instanceof Error ? err : new Error('Something went wrong'));
                }
            } finally {
                if (!signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        loadData();

        return () => abortController.abort(); // Отменяем запрос при размонтировании
    }, [key]); // Меняется `key` — новый запрос

    return { data, isLoading, error };
}
