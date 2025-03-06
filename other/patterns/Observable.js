class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

// const observable = new Observable();
//
// observable.subscribe((data) => console.log('Updated: ', data));
//
// const button = new Button('Notify', 50, 50);
// button.onClick(() => observable.notify('Button was clicked'));
//
// container.appendChild(button.element);
