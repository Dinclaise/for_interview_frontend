function codeGenerator(value) {
    const createdArr = Array.from({ length: value}, (_, i) => String(i).padStart(4, '0'));

    let result = [...shuffle(createdArr)];
    let i = 0;

    function shuffle(arr) {
        const copy = [...arr];
        const shuffled = [];

        while(copy.length) {
            const randomIdx = Math.floor(Math.random() * copy.length);
            shuffled.push(copy[randomIdx]);
            copy.splice(randomIdx, 1);
        }

        return shuffled;
    }

    // best performance
    // function shuffle(arr) {
    //     const copy = [...arr];
    //     for (let i = copy.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [copy[i], copy[j]] = [copy[j], copy[i]];
    //     }
    //     return copy;
    // }

    console.log('result', result);

    return {
        getCode: function() {
            if (i >= result.length) {
                this.reset();
            }
            return result[i++]
        },

        reset: function() {
            result = shuffle([...createdArr]);
            i = 0;
        }
    }
}

const generator = codeGenerator(5);
console.log(generator.getCode()); // "0000", "0001", ... "0004"
console.log(generator.getCode());
console.log(generator.getCode());
console.log(generator.getCode());
console.log('5', generator.getCode());
console.log(generator.getCode());
