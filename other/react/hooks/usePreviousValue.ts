import { useRef, useEffect } from 'react';

// Хук для получения предыдущего значения
function usePreviousValue<T>(value: T): T | undefined {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value; // Сохраняем текущее значение
    }, [value]); // Зависимость от изменения value

    return ref.current; // Возвращаем предыдущее значение
}
