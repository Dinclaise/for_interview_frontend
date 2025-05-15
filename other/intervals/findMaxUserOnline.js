//Временная сложность : O(n log n) из-за сортировки.
// Пространственная сложность : O(n) для хранения событий.

function getMaxUsers(stream) {
    // Создаем список событий
    const events = [];
    for (const [start, end] of stream) {
        events.push({ time: start, delta: 1 }); // Вход пользователя
        events.push({ time: end, delta: -1 });  // Выход пользователя
    }

    // Сортируем события по времени и типу (вход перед выходом)
    events.sort((a, b) => {
        if (a.time !== b.time) {
            return a.time - b.time;
        }
        // Если времена равны, сначала обрабатываем вход (+1), затем выход (-1)
        return a.delta - b.delta;
    });

    let currentUsers = 0;
    let maxUsers = 0;

    for (const event of events) {
        currentUsers += event.delta;
        if (currentUsers > maxUsers) {
            maxUsers = currentUsers;
        }
    }

    return maxUsers;
}

// O(n^2)
const getMaxUsers_v2 = (stream) => {
    if (stream.length === 0) return 0;

    let maxUsers = 0;

    for (let i = 0; i < stream.length; i++) {
        const [start, end] = stream[i];
        let count = 0;

        for (let j = 0; j < stream.length; j++) {
            const [otherStart, otherEnd] = stream[j];

            // Проверяем пересечение интервалов
            if (otherStart < end && otherEnd > start) {
                count++;
            }
        }

        if (count > maxUsers) {
            maxUsers = count;
        }
    }

    return maxUsers;
};

console.log(getMaxUsers([[1, 5], [5, 10]])); // 1
console.log(getMaxUsers([[1, 5], [0, 1], [4, 5]])); // 2
console.log(getMaxUsers([[1, 10], [5, 6], [2, 3], [7, 8]])); // 2
console.log(getMaxUsers([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]])); // 4
