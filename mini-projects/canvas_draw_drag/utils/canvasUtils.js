export function getMousePosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

export function redraw(ctx, shapes, hoveredShape) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    shapes.forEach(shape => shape.draw(ctx, hoveredShape));
}
