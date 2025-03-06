
import { getMousePosition, redraw } from "./utils/canvasUtils.js";
import { handleMouseDown, handleMouseMove } from "./utils/mouseEvents.js";
import { Rectangle, Triangle, Line } from "./components";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDragging = false;
let selectedShape = null;
let offsetX = 0;
let offsetY = 0;
let isResizing = false;
let resizeHandleIndex = null;
let hoveredShape = null; // Фигура, над которой находится курсор
let currentShapeType = 'rectangle'; // Текущий тип фигуры
let currentColor = '#ff0000'; // Текущий цвет
let currentBorderColor = '#000000'; // Текущий цвет границы
let currentBorderType = 'solid'; // Текущий тип границы
let currentBorderWidth = 1; // Текущая толщина границы
const shapes = [];

// Обработчики для кнопок выбора фигуры
document.getElementById('select-rectangle').addEventListener('click', () => {
    currentShapeType = 'rectangle';
});

document.getElementById('select-triangle').addEventListener('click', () => {
    currentShapeType = 'triangle';
});

document.getElementById('select-line').addEventListener('click', () => {
    currentShapeType = 'line';
});

// Обработчик для палитры цветов
document.getElementById('color-picker').addEventListener('input', (e) => {
    currentColor = e.target.value;
});

document.getElementById('border-color-picker').addEventListener('input', (e) => {
    currentBorderColor = e.target.value;
});

document.getElementById('border-type-select').addEventListener('change', (e) => {
    currentBorderType = e.target.value;
});

document.getElementById('border-width-input').addEventListener('input', (e) => {
    currentBorderWidth = parseInt(e.target.value);
});

// Добавление фигуры
canvas.addEventListener("dblclick", (e) => {
    const { x, y } = getMousePosition(canvas, e);
    let newShape;

    if (currentShapeType === 'rectangle') {
        newShape = new Rectangle(
            x, y, 100, 150,
            currentColor,
            { border: `${currentBorderWidth}px ${currentBorderType} ${currentBorderColor}` }
        );
    } else if (currentShapeType === 'triangle') {
        newShape = new Triangle(
            x, y, 100,
            currentColor,
            { border: `${currentBorderWidth}px ${currentBorderType} ${currentBorderColor}` }
        );
    } else if (currentShapeType === 'line') {
        newShape = new Line(
            x, y, x + 100, y + 100,
            currentColor,
            { lineWidth: currentBorderWidth }
        );
    }

    if (newShape) {
        shapes.push(newShape);
        redraw(ctx, shapes, hoveredShape);
    }
});

// Обработка mousedown
canvas.addEventListener("mousedown", (e) => {
    const result = handleMouseDown(canvas, shapes, hoveredShape, e);
    isDragging = result.isDragging;
    isResizing = result.isResizing;
    selectedShape = result.selectedShape;
    offsetX = result.offsetX || 0;
    offsetY = result.offsetY || 0;
    resizeHandleIndex = result.resizeHandleIndex || null;
});

// Обработка mousemove
canvas.addEventListener("mousemove", (e) => {
    handleMouseMove(
        canvas,
        shapes,
        hoveredShape,
        e,
        isDragging,
        isResizing,
        selectedShape,
        offsetX,
        offsetY,
        () => redraw(ctx, shapes, hoveredShape),
        canvas.width,
        canvas.height
    );
});

// Обработка mouseup
canvas.addEventListener("mouseup", () => {
    isDragging = false;
    isResizing = false;
    selectedShape = null;
    resizeHandleIndex = null;
});

canvas.addEventListener('mouseout', () => {
    hoveredShape = null;
    redraw(ctx, shapes, hoveredShape);
});

// Удаление фигуры
canvas.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const { x: mouseX, y: mouseY } = getMousePosition(canvas, e);

    for (let i = shapes.length - 1; i >= 0; i--) {
        if (shapes[i].contains(mouseX, mouseY)) {
            shapes.splice(i, 1);
            redraw(ctx, shapes, hoveredShape);
            break;
        }
    }
});
