export class Shape {
    constructor(x, y, color, styles = {}) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.styles = styles;
        this.handles = [];
    }

    draw(ctx, hoveredShape) {
        // Этот метод будет переопределяться в подклассах
    }

    contains(mx, my) {
        // Этот метод будет переопределяться в подклассах
        return false;
    }

    handleContains(mx, my) {
        return this.handles.some((handle) => {
            return mx > handle.x - 15 && mx < handle.x + 15 && my > handle.y - 15 && my < handle.y + 15;
        });
    }
}
