import {Element} from "../../shared/Element.js";

class Text extends Element {
    constructor(content, x = 0, y = 0) {
        super('div', content, x, y);
        this.element = this.create();
        this.element.style.fontSize = '14px';
        this.element.style.fontWeight = '500';
        this.element.style.color = 'black';
    }
}
