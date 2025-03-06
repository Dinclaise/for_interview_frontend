import {Shape} from "../../shared/Shape";

export class Line extends Shape {
    constructor(x1, y1, x2, y2, color, styles = {}) {
        super(x1, y1, color, styles);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(ctx, hoveredShape) {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.styles.lineWidth || 2;
        ctx.stroke();

        if (this === hoveredShape) {
            this.handles = [
                { x: this.x1, y: this.y1 }, // Первая точка
                { x: this.x2, y: this.y2 } // Вторая точка
            ];

            ctx.fillStyle = 'red';
            this.handles.forEach((handle) => {
                ctx.fillRect(handle.x - 5, handle.y - 5, 10, 10); // Рисуем маленькие квадратики
            });
        }
    }

    contains(mx, my) {
        const distance = Math.abs(
            (this.y2 - this.y1) * mx -
            (this.x2 - this.x1) * my +
            this.x2 * this.y1 -
            this.y2 * this.x1
        ) / Math.sqrt((this.y2 - this.y1) ** 2 + (this.x2 - this.x1) ** 2);

        const isOverLine = distance < 10;

        const isOverHandle = this.handles.some((handle) => {
            return mx > handle.x - 15 && mx < handle.x + 15 && my > handle.y - 15 && my < handle.y + 15;
        });

        return isOverLine || isOverHandle;
    }
}
