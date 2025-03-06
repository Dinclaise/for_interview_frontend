import { getMousePosition } from "./canvasUtils.js";
import {Line, Rectangle, Triangle} from "../components";

export function handleMouseDown(canvas, shapes, hoveredShape, e) {
    const { x: mouseX, y: mouseY } = getMousePosition(canvas, e);

    for (const shape of shapes) {
        if (shape.handleContains(mouseX, mouseY)) {
            return {
                isResizing: true,
                selectedShape: shape,
                resizeHandleIndex: shape.handles.findIndex((handle) => {
                    return mouseX > handle.x - 5 &&
                        mouseX < handle.x + 5 &&
                        mouseY > handle.y - 5 &&
                        mouseY < handle.y + 5;
                })
            };
        } else if (shape.contains(mouseX, mouseY)) {
            return {
                isDragging: true,
                selectedShape: shape,
                offsetX: mouseX - shape.x,
                offsetY: mouseY - shape.y
            };
        }
    }

    return { isDragging: false, isResizing: false, selectedShape: null };
}

export function handleMouseMove(canvas, shapes, hoveredShape, e, isDragging, isResizing, selectedShape, offsetX, offsetY, redraw, canvasWidth, canvasHeight) {
    const { x: mouseX, y: mouseY } = getMousePosition(canvas, e);

    let found = false;
    for (const shape of shapes) {
        if (shape.contains(mouseX, mouseY)) {
            hoveredShape = shape;
            found = true;
            break;
        }
    }
    if (!found) {
        hoveredShape = null;
    }
    redraw();

    if (isDragging && selectedShape) {
        updateShapePosition(selectedShape, mouseX, mouseY, offsetX, offsetY, canvasWidth, canvasHeight);
        redraw();
    } else if (isResizing && selectedShape !== null) {
        updateShapeResize(selectedShape, mouseX, mouseY, canvasWidth, canvasHeight);
        redraw();
    }
}

function updateShapePosition(shape, mouseX, mouseY, offsetX, offsetY, canvasWidth, canvasHeight) {
    let newX = mouseX - offsetX;
    let newY = mouseY - offsetY;

    // Ограничиваем координаты границами Canvas
    newX = Math.max(0, Math.min(newX, canvasWidth - (shape.width || 0)));
    newY = Math.max(0, Math.min(newY, canvasHeight - (shape.height || 0)));

    shape.x = newX;
    shape.y = newY;

    if (shape instanceof Triangle) {
        shape.handles = [
            { x: shape.x, y: shape.y + shape.size },
            { x: shape.x + shape.size / 2, y: shape.y },
            { x: shape.x + shape.size, y: shape.y + shape.size }
        ];
    }

    if (shape instanceof Line) {
        shape.x1 += mouseX - offsetX;
        shape.y1 += mouseY - offsetY;
        shape.x2 += mouseX - offsetX;
        shape.y2 += mouseY - offsetY;
    }
}

function updateShapeResize(shape, mouseX, mouseY, canvasWidth, canvasHeight) {
    const handle = shape.handles[resizeHandleIndex];

    if (shape instanceof Rectangle) {
        if (resizeHandleIndex === 0) {
            shape.x = Math.max(0, Math.min(mouseX, canvasWidth - shape.width));
            shape.y = Math.max(0, Math.min(mouseY, canvasHeight - shape.height));
            shape.width += handle.x - mouseX;
            shape.height += handle.y - mouseY;
        } else if (resizeHandleIndex === 1) {
            shape.y = Math.max(0, Math.min(mouseY, canvasHeight - shape.height));
            shape.width = Math.max(10, mouseX - shape.x);
            shape.height += handle.y - mouseY;
        } else if (resizeHandleIndex === 2) {
            shape.x = Math.max(0, Math.min(mouseX, canvasWidth - shape.width));
            shape.width += handle.x - mouseX;
            shape.height = Math.max(10, mouseY - shape.y);
        } else if (resizeHandleIndex === 3) {
            shape.width = Math.max(10, mouseX - shape.x);
            shape.height = Math.max(10, mouseY - shape.y);
        }
    } else if (shape instanceof Triangle) {
        if (resizeHandleIndex === 0) {
            shape.x = Math.max(0, Math.min(mouseX, canvasWidth - shape.size));
            shape.size = Math.max(10, mouseY - shape.y);
        } else if (resizeHandleIndex === 1) {
            shape.y = Math.max(0, Math.min(mouseY, canvasHeight - shape.size));
            shape.size = Math.max(10, shape.x + shape.size - mouseX);
        } else if (resizeHandleIndex === 2) {
            shape.size = Math.max(10, mouseX - shape.x);
        }
    } else if (shape instanceof Line) {
        if (resizeHandleIndex === 0) {
            shape.x1 = Math.max(0, Math.min(mouseX, canvasWidth));
            shape.y1 = Math.max(0, Math.min(mouseY, canvasHeight));
        } else if (resizeHandleIndex === 1) {
            shape.x2 = Math.max(0, Math.min(mouseX, canvasWidth));
            shape.y2 = Math.max(0, Math.min(mouseY, canvasHeight));
        }
    }
}
