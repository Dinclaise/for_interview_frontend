import {Element} from "../../shared/Element.js";

export class Button extends Element {
    constructor(content, x = 0, y = 0) {
        super('button', content, x, y);
        this.element = this.create();
        this.element.style.backgroundColor = 'lightBlue';
        this.element.style.padding = '10px';
        this.element.style.border = '1ps solid #ccc';
        this.element.style.cursor = 'pointer';
    }

    onClick(callback) {
        this.element.addEventListener('click', callback);
    }
}
