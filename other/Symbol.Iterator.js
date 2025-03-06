const myIterable = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        let current = this.from;
        let last = this.to;
        return {
            next() {
                if (current <= last) {
                    return { value: current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const value of myIterable) {
    console.log(value); // Выведет числа от 1 до 5
}
