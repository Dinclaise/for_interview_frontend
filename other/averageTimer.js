/**
 * Упрощённая функция генерации задержки с приблизительным средним 500 мс.
 *
 * @returns {number} Задержка в миллисекундах
 */
function randomDelaySimplified() {
    const minimum = 200;
    const maximum = 1000;
    const uniformDelay = Math.random() * (maximum - minimum) + minimum;

    // Сдвиг среднего значения с 600 мс до 500 мс
    const adjustedDelay = uniformDelay - 100 * Math.random();

    // Ограничение значений в диапазоне [200, 1000]
    return Math.min(Math.max(adjustedDelay, minimum), maximum);
}

// Пример использования:
for (let i = 0; i < 10; i++) {
    console.log(randomDelaySimplified().toFixed(2) + ' мс');
}
