const func1 = async () => {
    console.log('1', '?');

    setTimeout(() => console.log('2', '?'), 0);

    Promise.resolve().then(() => console.log('3', '?'));

    const func2 = async () => {
        setTimeout(() => console.log('4', '?'), 1);
        console.log('5', '?');
        Promise.resolve().then(() =>
            setTimeout(() => console.log('6', '?'), 0)
        );

        const importValue = new Promise((res) => {
            console.log('7', '?');
            Promise.resolve().then(() => console.log('8', '?'));

            setTimeout(() => {
                console.log('13', '?');
                res();
            }, 5);
        });

        await importValue;

        console.log('9', '?');
    };

    Promise.resolve().then(() => console.log('10', '?'));

    await func2();

    console.log('11', '?');
};

func1();

console.log('12', '?');

// 1 5 7 12 3 10 8 2 4 6 13 9 11 - node
// 1 5 7 12 3 10 8 2 6 4 13 9 11 - browser

// s | mi | ma
//   |    |



// #2

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3)).then(() => console.log(11));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5)).then(() => console.log(12));
setTimeout(() => console.log(6));
console.log(7);
Promise.resolve().then(console.log('123'));
async function wait() {
    console.log(8);
    let prom = await new Promise((resolve) => {
        console.log(9);
        setTimeout(resolve, 1000);
    });
}
wait();

// 1 7 123 8 9 3 5 11 12 2 6 4
