type ReturnTypeCustom<T> = T extends (...args: any[]) => infer R ? R : never;

// Пример функции
const getNumber = (x: string): number => {
    return parseInt(x);
};

// Применение ReturnTypeCustom
type Result = ReturnTypeCustom<typeof getNumber>; // Тип Result: number
