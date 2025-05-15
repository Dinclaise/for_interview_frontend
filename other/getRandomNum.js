function getRandomNum(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);

    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * ( max - min + 1)) + max;
}
