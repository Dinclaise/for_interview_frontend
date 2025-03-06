export class Element {
    constructor(type, content, x = 0, y = 0) {
        this.type = type;
        this.content = content;
        this.x = x;
        this.y = y;
        this.element = null;
    }

    create() {
        const el = document.createElement(this.type);
        el.textContent = this.content;
        el.style.position = 'absolute';
        el.style.left = `${this.x}px`;
        el.style.top = `${this.y}px`;
        this.element = el;
        return el;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
        if (this.element) {
            this.element.style.left = `${this.x}px`;
            this.element.style.top = `${this.y}px`;
        }
    }
}
