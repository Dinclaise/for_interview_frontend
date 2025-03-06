import {Shape} from "../../shared/Shape.js";

export class Rectangle extends Shape {
    constructor(x, y, width, height, color, styles = {}) {
        super(x, y, color, styles);
        this.width = width;
        this.height = height;
    }

    draw(ctx, hoveredShape) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        if (this.styles.border) {
            const [width, style, color] = this.styles.border.split(' ');
            ctx.strokeStyle = color || 'black';
            ctx.lineWidth = parseFloat(width) || 1;
            ctx.setLineDash(style === 'dashed' ? [5, 5] : []);
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }

        if (this === hoveredShape) {
            this.handles = [
                { x: this.x, y: this.y }, // Левый верхний угол
                { x: this.x + this.width, y: this.y }, // Правый верхний угол
                { x: this.x, y: this.y + this.height }, // Левый нижний угол
                { x: this.x + this.width, y: this.y + this.height } // Правый нижний угол
            ];

            ctx.fillStyle = 'red';
            this.handles.forEach((handle) => {
                ctx.fillRect(handle.x - 5, handle.y - 5, 10, 10); // Рисуем маленькие квадратики
            });
        }
    }

    contains(mx, my) {
        const isOverShape = (
            mx > this.x &&
            mx < this.x + this.width &&
            my > this.y &&
            my < this.y + this.height
        );

        const isOverHandle = this.handles.some((handle) => {
            return mx > handle.x - 15 && mx < handle.x + 15 && my > handle.y - 15 && my < handle.y + 15;
        });

        return isOverShape || isOverHandle;
    }
}
