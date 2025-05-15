class EventEmitterV3 {
    constructor() {
        this.container = new Map();
    }

    on(event, cb) {
        if (this.container.has(event)) {
            this.container.get(event).add(cb)
            return this
        }

        this.container.set(event, new Set([cb]))
        return this
    }

    off(event, cb) {
        if (this.container.has(event)) {
            this.container.get(event).delete(cb)
            return this
        }

        if (this.container.size === 0) {
            this.container.delete(event)
        }

        return this
    }

    emit(event) {
        if (this.container.has(event)) {
            this.container.get(event).forEach(cb => cb())
            return this
        }
    }

    once(event, cb) {
        // Создаём обёртку, которая удаляет себя после первого вызова
        const onceHandler = (...args) => {
            cb(...args); // Вызываем оригинальный обработчик
            this.off(event, onceHandler); // Удаляем себя из подписки
        };

        this.on(event, onceHandler);
        return this;
    }
}
const emitterv3 = new EventEmitter();

emitterv3.once('init', (data) => {
    console.log('Init event fired with:', data);
});
emitterv3.emit('init', 'Hello'); // "Init event fired with: Hello"
emitterv3.emit('init', 'World'); // Ничего не произойдёт

class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(event, cb) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const callbacks = this.events.get(event);
        callbacks.push(cb);

        return {
            release: () => {
                const index = callbacks.indexOf(cb);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        }
    }

    emit(event, ...args) {
        if (this.events.has(event)) {
            const callbacks = this.events.get(event);
            callbacks.forEach((cb) => cb(...args));
        }
        return this;
    }
}

// Пример использования

const emitter = new EventEmitter();

function callback1(x, y) {
    console.log(x + y, "event1");
}

function callback2(x, y) {
    console.log(x * y, "event2");
}

const sub1 = emitter.subscribe("event1", callback1);
const sub2 = emitter.subscribe("event2", callback2);
const sub3 = emitter.subscribe("event1", callback1);

emitter.emit("event1", 1, 2); // 3 "event1", 3 "event1"
emitter.emit("event2", 3, 4); // 12 "event2"

// Отмена подписки
sub1.release();
sub3.release();

emitter.emit("event1", 1, 2); // Ничего не выведет
emitter.emit("event2", 3, 4); // 12 "event2"



// var 2

class EventEmitterV2 {
    constructor() {
        this.listeners = new Map();
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }

        // Создаём новый массив с добавленным коллбеком
        const newCallbacks = [...this.listeners.get(eventName), callback];
        this.listeners.set(eventName, newCallbacks);

        return {
            unsubscribe: () => {
                // При отписке берём текущие коллбеки, фильтруем
                const filtered = this.listeners.get(eventName)
                    .filter(cb => cb !== callback);
                this.listeners.set(eventName, filtered);
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.listeners.has(eventName)) {
            return [];
        } else {
            let cbs = this.listeners.get(eventName);

            const results = cbs.map(cb => cb(...args));

            return results;
        }
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
