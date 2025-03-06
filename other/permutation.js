function permuteV0(nums) {
    let result = [];

    function backtrack(path, usedArr) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; nums.length; i++) {
            if (usedArr[i]) continue;

            path.push(nums[i]);
            usedArr[i] = true;

            backtrack(path, usedArr);

            usedArr[i] = false;
            path.pop();
        }
    }

    backtrack([], new Array(nums.length).fill(false));

    return result;
}

function permute(nums) {
    const result = [];

    const backtrack = (path, options) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < options.length; i++) {
            path.push(options[i]);
            backtrack(path, options.slice(0, i).concat(options.slice(i + 1)));
            path.pop();
        }
    };

    backtrack([], nums);
    return result;
}

function permuteV2(nums) {
    const result = [];

    // Базовый случай: если массив пустой, возвращаем пустой массив
    if (nums.length === 0) return [[]];

    // Рекурсивная функция для генерации перестановок
    function backtrack(path, remaining) {
        // Если больше нет элементов для выбора, добавляем текущую перестановку в результат
        if (remaining.length === 0) {
            result.push(path);
            return;
        }

        // Перебираем все элементы из оставшихся
        for (let i = 0; i < remaining.length; i++) {
            const current = remaining[i];
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1)); // Убираем текущий элемент
            backtrack([...path, current], newRemaining); // Добавляем текущий элемент к пути
        }
    }

    // Начинаем рекурсию с пустого пути и всеми элементами массива
    backtrack([], nums);

    return result;
}

const nums = [1, 2, 3];
console.log(permuteV2(nums)); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
