class Builder {
    constructor() {
        this.result = '';
    }

    addText(text) {
        this.result += text;
        return this; // Возвращаем сам объект для цепочки вызовов
    }

    addSpace() {
        this.result += ' ';
        return this;
    }

    build() {
        return this.result;
    }
}

const builder = new Builder();
const result = builder.addText('Hello')
    .addSpace()
    .addText('world')
    .build();

console.log(result); // "Hello world"
