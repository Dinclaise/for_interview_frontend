import {Shape} from "../../shared/Shape";

export class Triangle extends Shape {
    constructor(x, y, size, color, styles = {}) {
        super(x, y, color, styles);
        this.size = size;
    }

    draw(ctx, hoveredShape) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.size); // Нижняя левая точка
        ctx.lineTo(this.x + this.size / 2, this.y); // Верхняя точка
        ctx.lineTo(this.x + this.size, this.y + this.size); // Нижняя правая точка
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        if (this.styles.border) {
            const [width, style, color] = this.styles.border.split(' ');
            ctx.strokeStyle = color || 'black';
            ctx.lineWidth = parseFloat(width) || 1;
            ctx.setLineDash(style === 'dashed' ? [5, 5] : []);
            ctx.stroke();
        }

        if (this === hoveredShape) {
            this.handles = [
                { x: this.x, y: this.y + this.size }, // Нижняя левая точка
                { x: this.x + this.size / 2, y: this.y }, // Верхняя точка
                { x: this.x + this.size, y: this.y + this.size } // Нижняя правая точка
            ];

            ctx.fillStyle = 'red';
            this.handles.forEach((handle) => {
                ctx.fillRect(handle.x - 5, handle.y - 5, 10, 10); // Рисуем маленькие квадратики
            });
        }
    }

    contains(mx, my) {
        const area = this.size * this.size / 2;

        const a1 = Math.abs(
            (this.x - mx) * (this.y + this.size - my) -
            (this.x - this.x + this.size / 2) * (this.y + this.size - this.y)
        ) / 2;

        const a2 = Math.abs(
            (this.x + this.size / 2 - mx) * (this.y - my) -
            (this.x + this.size / 2 - this.x + this.size) * (this.y - this.y + this.size)
        ) / 2;

        const a3 = Math.abs(
            (this.x + this.size - mx) * (this.y + this.size - my) -
            (this.x + this.size - this.x) * (this.y + this.size - this.y)
        ) / 2;

        const totalArea = a1 + a2 + a3;

        const isOverShape = Math.abs(totalArea - area) < 1;

        const isOverHandle = this.handles.some((handle) => {
            return mx > handle.x - 15 && mx < handle.x + 15 && my > handle.y - 15 && my < handle.y + 15;
        });

        return isOverShape || isOverHandle;
    }
}
